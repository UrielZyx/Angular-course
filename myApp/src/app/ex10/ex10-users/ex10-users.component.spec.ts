import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10UsersComponent } from './ex10-users.component';

describe('Ex10UsersComponent', () => {
  let component: Ex10UsersComponent;
  let fixture: ComponentFixture<Ex10UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex10UsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex10UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
