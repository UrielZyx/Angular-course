import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent41Component } from './parent41.component';

describe('Parent41Component', () => {
  let component: Parent41Component;
  let fixture: ComponentFixture<Parent41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parent41Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
