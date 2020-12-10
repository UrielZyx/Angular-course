import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3q2Component } from './ex3q2.component';

describe('Ex3q2Component', () => {
  let component: Ex3q2Component;
  let fixture: ComponentFixture<Ex3q2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3q2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3q2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
