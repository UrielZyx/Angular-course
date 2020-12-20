import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Person44Component } from './person44.component';

describe('Person44Component', () => {
  let component: Person44Component;
  let fixture: ComponentFixture<Person44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Person44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Person44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
