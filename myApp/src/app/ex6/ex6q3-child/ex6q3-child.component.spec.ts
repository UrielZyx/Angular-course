import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex6q3ChildComponent } from './ex6q3-child.component';

describe('Ex6q3ChildComponent', () => {
  let component: Ex6q3ChildComponent;
  let fixture: ComponentFixture<Ex6q3ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex6q3ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex6q3ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
