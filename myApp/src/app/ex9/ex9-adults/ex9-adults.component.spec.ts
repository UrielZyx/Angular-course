import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex9AdultsComponent } from './ex9-adults.component';

describe('Ex9AdultsComponent', () => {
  let component: Ex9AdultsComponent;
  let fixture: ComponentFixture<Ex9AdultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex9AdultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex9AdultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
