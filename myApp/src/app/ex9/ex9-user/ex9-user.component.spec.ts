import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex9UserComponent } from './ex9-user.component';

describe('Ex9UserComponent', () => {
  let component: Ex9UserComponent;
  let fixture: ComponentFixture<Ex9UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex9UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex9UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
