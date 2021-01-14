import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10MenuComponent } from './ex10-menu.component';

describe('Ex10MenuComponent', () => {
  let component: Ex10MenuComponent;
  let fixture: ComponentFixture<Ex10MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex10MenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex10MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
