import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stream-main',
  templateUrl: './stream-main.component.html',
  styleUrls: ['./stream-main.component.scss'],
})
export class StreamMainComponent implements OnInit {
  @Input() remoteCalls;

  constructor() {}

  ngOnInit(): void {}
}
