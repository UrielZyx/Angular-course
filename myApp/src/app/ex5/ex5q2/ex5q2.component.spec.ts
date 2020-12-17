import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex5q2Component } from './ex5q2.component';

describe('Ex5q2Component', () => {
  let component: Ex5q2Component;
  let fixture: ComponentFixture<Ex5q2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex5q2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex5q2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
