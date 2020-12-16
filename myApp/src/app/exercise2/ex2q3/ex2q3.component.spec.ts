import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2q3Component } from './ex2q3.component';

describe('Ex2q3Component', () => {
  let component: Ex2q3Component;
  let fixture: ComponentFixture<Ex2q3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2q3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2q3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
