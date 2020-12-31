import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8q1ageInputComponent } from './ex8q1age-input.component';

describe('Ex8q1ageInputComponent', () => {
  let component: Ex8q1ageInputComponent;
  let fixture: ComponentFixture<Ex8q1ageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex8q1ageInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex8q1ageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
