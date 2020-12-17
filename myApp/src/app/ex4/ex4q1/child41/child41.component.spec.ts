import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child41Component } from './child41.component';

describe('Child41Component', () => {
  let component: Child41Component;
  let fixture: ComponentFixture<Child41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child41Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
