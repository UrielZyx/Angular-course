import { ComponentFixture, TestBed } from '@angular/core/testing';

import { People44Component } from './people44.component';

describe('People44Component', () => {
  let component: People44Component;
  let fixture: ComponentFixture<People44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ People44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(People44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
