import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilsService } from '../utils.service';

import { App1Component } from './app1.component';

describe('App1Component', () => {
  let component: App1Component;
  let fixture: ComponentFixture<App1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should say Hello', (done) => {
    fixture.debugElement.nativeElement.querySelector("#dataBtn").click()
    fixture.whenStable().then(() => {
      let obj = fixture.debugElement.nativeElement.querySelector("#dataDiv")
      fixture.detectChanges()
      expect(obj.textContent).toEqual("Hello! :)")
      done();
    })
  })
});
