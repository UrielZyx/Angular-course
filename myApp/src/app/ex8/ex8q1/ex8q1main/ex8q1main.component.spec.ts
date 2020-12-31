import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8q1mainComponent } from './ex8q1main.component';

describe('Ex8q1mainComponent', () => {
  let component: Ex8q1mainComponent;
  let fixture: ComponentFixture<Ex8q1mainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex8q1mainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex8q1mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
