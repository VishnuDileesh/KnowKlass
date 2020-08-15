import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stream-header',
  templateUrl: './stream-header.component.html',
  styleUrls: ['./stream-header.component.scss'],
})
export class StreamHeaderComponent implements OnInit {
  @Input() localCallId;
  @Input() exitBtnText;

  constructor() {}

  ngOnInit(): void {}
}
