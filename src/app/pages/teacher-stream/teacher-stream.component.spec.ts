import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStreamComponent } from './teacher-stream.component';

describe('TeacherStreamComponent', () => {
  let component: TeacherStreamComponent;
  let fixture: ComponentFixture<TeacherStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
