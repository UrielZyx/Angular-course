import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex7q3Component } from './ex7q3.component';

describe('Ex7q3Component', () => {
  let component: Ex7q3Component;
  let fixture: ComponentFixture<Ex7q3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex7q3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex7q3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
