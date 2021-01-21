import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvMainComponent } from './tv-main.component';

describe('TvMainComponent', () => {
  let component: TvMainComponent;
  let fixture: ComponentFixture<TvMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
