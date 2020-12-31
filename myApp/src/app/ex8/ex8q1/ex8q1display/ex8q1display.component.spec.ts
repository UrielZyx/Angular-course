import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8q1displayComponent } from './ex8q1display.component';

describe('Ex8q1displayComponent', () => {
  let component: Ex8q1displayComponent;
  let fixture: ComponentFixture<Ex8q1displayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex8q1displayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex8q1displayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
