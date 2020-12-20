import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task44Component } from './task44.component';

describe('Task44Component', () => {
  let component: Task44Component;
  let fixture: ComponentFixture<Task44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
