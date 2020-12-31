import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex6q3tasksComponent } from './ex6q3tasks.component';

describe('Ex6q3tasksComponent', () => {
  let component: Ex6q3tasksComponent;
  let fixture: ComponentFixture<Ex6q3tasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex6q3tasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex6q3tasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
