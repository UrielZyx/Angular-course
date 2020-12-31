import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex6q3mainComponent } from './ex6q3main.component';

describe('Ex6q3mainComponent', () => {
  let component: Ex6q3mainComponent;
  let fixture: ComponentFixture<Ex6q3mainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex6q3mainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex6q3mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
