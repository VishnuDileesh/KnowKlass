import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.scss'],
})
export class ClassRoomComponent implements OnInit {
  roomid: number;
  channelName: string;

  constructor() {
    this.roomid = Math.floor(Math.random() * 100);
    this.channelName = `channel-name-${Math.floor(Math.random() * 10000)}`;
  }

  ngOnInit(): void {}
}
