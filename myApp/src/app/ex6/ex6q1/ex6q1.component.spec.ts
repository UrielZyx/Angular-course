import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex6q1Component } from './ex6q1.component';

describe('Ex6q1Component', () => {
  let component: Ex6q1Component;
  let fixture: ComponentFixture<Ex6q1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex6q1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex6q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
