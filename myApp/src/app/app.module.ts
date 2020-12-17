import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonCompComponent } from './exercise2/person-comp/person-comp.component';
import { LengthSensitiveBoxesComponent } from './exercise2/length-sensitive-boxes/length-sensitive-boxes.component';
import { Ex3q1Component } from './ex3/ex3q1/ex3q1.component';
import { Ex3q2Component } from './ex3/ex3q2/ex3q2.component';
import { Ex3q3Component } from './ex3/ex3q3/ex3q3.component';
import { Ex2q3Component } from './exercise2/ex2q3/ex2q3.component';
import { Parent41Component } from './ex4/ex4q1/parent41/parent41.component';
import { Child41Component } from './ex4/ex4q1/child41/child41.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCompComponent,
    LengthSensitiveBoxesComponent,
    Ex3q1Component,
    Ex3q2Component,
    Ex3q3Component,
    Ex2q3Component,
    Parent41Component,
    Child41Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
