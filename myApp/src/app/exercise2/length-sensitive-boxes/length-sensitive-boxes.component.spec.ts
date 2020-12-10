import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthSensitiveBoxesComponent } from './length-sensitive-boxes.component';

describe('LengthSensitiveBoxesComponent', () => {
  let component: LengthSensitiveBoxesComponent;
  let fixture: ComponentFixture<LengthSensitiveBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthSensitiveBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthSensitiveBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
