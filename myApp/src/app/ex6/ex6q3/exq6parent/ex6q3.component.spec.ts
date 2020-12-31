import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex6q3Component } from './ex6q3.component';

describe('Ex6q3Component', () => {
  let component: Ex6q3Component;
  let fixture: ComponentFixture<Ex6q3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex6q3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex6q3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
