import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10ProductsComponent } from './ex10-products.component';

describe('Ex10ProductsComponent', () => {
  let component: Ex10ProductsComponent;
  let fixture: ComponentFixture<Ex10ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex10ProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex10ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
