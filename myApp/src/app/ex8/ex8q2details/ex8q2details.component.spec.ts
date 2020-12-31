import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8q2detailsComponent } from './ex8q2details.component';

describe('Ex8q2detailsComponent', () => {
  let component: Ex8q2detailsComponent;
  let fixture: ComponentFixture<Ex8q2detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex8q2detailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex8q2detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
