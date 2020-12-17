import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent42Component } from './parent42.component';

describe('Parent42Component', () => {
  let component: Parent42Component;
  let fixture: ComponentFixture<Parent42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parent42Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
