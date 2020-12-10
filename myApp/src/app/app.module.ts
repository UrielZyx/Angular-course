import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonCompComponent } from './exercise2/person-comp/person-comp.component';
import { LengthSensitiveBoxesComponent } from './exercise2/length-sensitive-boxes/length-sensitive-boxes.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCompComponent,
    LengthSensitiveBoxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
