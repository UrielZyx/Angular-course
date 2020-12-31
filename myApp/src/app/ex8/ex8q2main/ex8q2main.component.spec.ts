import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8q2mainComponent } from './ex8q2main.component';

describe('Ex8q2mainComponent', () => {
  let component: Ex8q2mainComponent;
  let fixture: ComponentFixture<Ex8q2mainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex8q2mainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex8q2mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
