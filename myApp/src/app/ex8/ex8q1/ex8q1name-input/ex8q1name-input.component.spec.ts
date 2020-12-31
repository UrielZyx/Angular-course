import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8q1nameInputComponent } from './ex8q1name-input.component';

describe('Ex8q1nameInputComponent', () => {
  let component: Ex8q1nameInputComponent;
  let fixture: ComponentFixture<Ex8q1nameInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex8q1nameInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex8q1nameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
