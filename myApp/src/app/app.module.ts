import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router'

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
import { Parent42Component } from './ex4/ex4q2/parent42/parent42.component';
import { Child42Component } from './ex4/ex4q2/child42/child42.component';
import { Ex5q2Component } from './ex5/ex5q2/ex5q2.component';
import { People44Component } from './ex4/ex4q4/people44/people44.component';
import { Person44Component } from './ex4/ex4q4/person44/person44.component';
import { Task44Component } from './ex4/ex4q4/task44/task44.component';
import { Ex6q1Component } from './ex6/ex6q1/ex6q1.component';
import { Ex7q3Component } from './ex7/ex7q3/ex7q3.component';
import { Ex6q3Component } from './ex6/ex6q3/ex6q3.component';
import { Ex6q3ChildComponent } from './ex6/ex6q3-child/ex6q3-child.component';
import { MainPageComponent } from './spa-demo/main-page/main-page.component';
import { AboutComponent } from './spa-demo/about/about.component';
import { ContactComponent } from './spa-demo/contact/contact.component';

const routes: Routes = [
  {path: "contact", component: ContactComponent},
  {path: "about", component: AboutComponent}
]

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
    Child41Component,
    Parent42Component,
    Child42Component,
    Ex5q2Component,
    People44Component,
    Person44Component,
    Task44Component,
    Ex6q1Component,
    Ex7q3Component,
    Ex6q3Component,
    Ex6q3ChildComponent,
    MainPageComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
