import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamMainComponent } from './stream-main.component';

describe('StreamMainComponent', () => {
  let component: StreamMainComponent;
  let fixture: ComponentFixture<StreamMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
