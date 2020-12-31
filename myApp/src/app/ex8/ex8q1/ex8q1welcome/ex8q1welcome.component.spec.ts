import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8q1welcomeComponent } from './ex8q1welcome.component';

describe('Ex8q1welcomeComponent', () => {
  let component: Ex8q1welcomeComponent;
  let fixture: ComponentFixture<Ex8q1welcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex8q1welcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex8q1welcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
