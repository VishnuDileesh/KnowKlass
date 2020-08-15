import { Component, OnInit } from '@angular/core';
import {
  NgxAgoraService,
  Stream,
  StreamEvent,
  AgoraClient,
  ClientEvent,
} from 'ngx-agora';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-stream-room',
  templateUrl: './stream-room.component.html',
  styleUrls: ['./stream-room.component.scss'],
})
export class StreamRoomComponent implements OnInit {
  title = 'Testing Angular Video';
  localCallId = 'angular-local';
  remoteCalls: string[] = [];

  private client: AgoraClient;
  private localStream: Stream;
  private uid: number;
  constructor(private agoraService: NgxAgoraService) {
    this.uid = Math.floor(Math.random() * 100);
  }

  ngOnInit(): void {
    this.client = this.agoraService.createClient({
      mode: 'rtc',
      codec: 'h264',
    });

    this.assignClientHandlers();

    this.localStream = this.agoraService.createStream({
      streamID: this.uid,
      audio: true,
      video: true,
      screen: false,
    });
    this.assignLocalStreamHandlers();
    this.initLocalStream(() =>
      this.join(
        (uid) => this.publish(),
        (error) => console.error(error)
      )
    );
  }

  join(
    onSuccess?: (uid: number | string) => void,
    onFailure?: (error: Error) => void
  ): void {
    this.client.join(null, 'foo-bar', this.uid, onSuccess, onFailure);
  }

  publish(): void {
    this.client.publish(this.localStream, (err) =>
      console.log('Publish local stream error: ' + err)
    );
  }

  private assignClientHandlers(): void {
    this.client.on(ClientEvent.LocalStreamPublished, (evt) => {
      console.log('Published Local Stream Successfully');
    });

    this.client.on(ClientEvent.Error, (error) => {
      console.log('Got error message: ', error.reason);
      if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.client.renewChannelKey(
          '',
          () => console.log('Renewed the channel key successfully.'),
          (renewError) =>
            console.error('Renew channel key failed: ', renewError)
        );
      }
    });

    this.client.on(ClientEvent.RemoteStreamAdded, (evt) => {
      const stream = evt.stream as Stream;
      this.client.subscribe(stream, { audio: true, video: true }, (err) => {
        console.log('Subscribe stream failed', err);
      });
    });

    this.client.on(ClientEvent.RemoteStreamSubscribed, (evt) => {
      const stream = evt.stream as Stream;
      const id = this.getRemoteId(stream);
      // if (!this.remoteCalls.length) {
      //   this.remoteCalls.push(id);
      //   console.log(`Vishnu: the id is ${id}`);
      //   console.log(`Vishnu: remote list is ${this.remoteCalls}`);
      //   setTimeout(() => stream.play(id), 1000);
      // }

      console.log(`Vishnu: ${id}`);

      if (!this.remoteCalls.includes(`agora_remote${id}`)) {
        this.remoteCalls.push(id);
        // console.log(`Vishnu: remote list is ${this.remoteCalls}`);
        setTimeout(() => stream.play(id), 1000);
      }
    });

    this.client.on(ClientEvent.RemoteStreamRemoved, (evt) => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = [];
        console.log(`Remote stream is removed ${stream.getId()}`);
      }
    });

    this.client.on(ClientEvent.PeerLeave, (evt) => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(
          (call) => call !== `${this.getRemoteId(stream)}`
        );
        console.log(`${evt.uid} left from this channel`);
      }
    });
  }

  private getRemoteId(stream: Stream): string {
    return `agora_remote-${stream.getId()}`;
  }

  private assignLocalStreamHandlers(): void {
    this.localStream.on(StreamEvent.MediaAccessAllowed, () => {
      console.log('accessAllowed');
    });

    // The user has denied access to the camera and mic.
    this.localStream.on(StreamEvent.MediaAccessDenied, () => {
      console.log('accessDenied');
    });
  }

  private initLocalStream(onSuccess?: () => any): void {
    this.localStream.init(
      () => {
        // The user has granted access to the camera and mic.
        this.localStream.play(this.localCallId);
        if (onSuccess) {
          onSuccess();
        }
      },
      (err) => console.error('getUserMedia failed', err)
    );
  }
}
