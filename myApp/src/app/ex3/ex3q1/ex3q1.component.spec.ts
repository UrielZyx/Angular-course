import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3q1Component } from './ex3q1.component';

describe('Ex3q1Component', () => {
  let component: Ex3q1Component;
  let fixture: ComponentFixture<Ex3q1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3q1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
