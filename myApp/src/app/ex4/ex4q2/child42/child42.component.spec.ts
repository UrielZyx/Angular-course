import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child42Component } from './child42.component';

describe('Child42Component', () => {
  let component: Child42Component;
  let fixture: ComponentFixture<Child42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child42Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
