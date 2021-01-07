import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex9AllUsersComponent } from './ex9-all-users.component';

describe('Ex9AllUsersComponent', () => {
  let component: Ex9AllUsersComponent;
  let fixture: ComponentFixture<Ex9AllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex9AllUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex9AllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
