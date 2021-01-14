import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10MainComponent } from './ex10-main.component';

describe('Ex10MainComponent', () => {
  let component: Ex10MainComponent;
  let fixture: ComponentFixture<Ex10MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex10MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex10MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
