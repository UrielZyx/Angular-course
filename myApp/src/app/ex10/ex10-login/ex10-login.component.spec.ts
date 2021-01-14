import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10LoginComponent } from './ex10-login.component';

describe('Ex10LoginComponent', () => {
  let component: Ex10LoginComponent;
  let fixture: ComponentFixture<Ex10LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex10LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex10LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
