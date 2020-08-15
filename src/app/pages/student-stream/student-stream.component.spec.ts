import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStreamComponent } from './student-stream.component';

describe('StudentStreamComponent', () => {
  let component: StudentStreamComponent;
  let fixture: ComponentFixture<StudentStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
