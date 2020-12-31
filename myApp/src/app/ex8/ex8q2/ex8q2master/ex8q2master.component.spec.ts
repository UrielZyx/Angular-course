import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8q2masterComponent } from './ex8q2master.component';

describe('Ex8q2masterComponent', () => {
  let component: Ex8q2masterComponent;
  let fixture: ComponentFixture<Ex8q2masterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex8q2masterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex8q2masterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
