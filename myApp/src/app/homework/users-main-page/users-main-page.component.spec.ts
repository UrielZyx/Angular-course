import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMainPageComponent } from './users-main-page.component';

describe('UsersMainPageComponent', () => {
  let component: UsersMainPageComponent;
  let fixture: ComponentFixture<UsersMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
