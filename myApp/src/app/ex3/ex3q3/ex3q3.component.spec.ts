import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3q3Component } from './ex3q3.component';

describe('Ex3q3Component', () => {
  let component: Ex3q3Component;
  let fixture: ComponentFixture<Ex3q3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3q3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3q3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
