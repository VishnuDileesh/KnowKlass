import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stream-video',
  templateUrl: './stream-video.component.html',
  styleUrls: ['./stream-video.component.scss'],
})
export class StreamVideoComponent implements OnInit {
  @Input() remoteCallerId;

  remoteVideoId: string;
  remoteAudioId: string;
  id: any;

  constructor() {}

  ngOnInit(): void {
    this.id = this.remoteCallerId.match(/\d+/g);
    console.log(`My Dearest ${this.id}`);
    this.remoteVideoId = `video${this.id}`;
    this.remoteAudioId = `audio${this.id}`;
    // this.id = this.remoteCallerId.match(/\d+/g);
  }
}
