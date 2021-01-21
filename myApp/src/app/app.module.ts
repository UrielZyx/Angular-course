import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { StoreModule } from '@ngrx/store';

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
import { Ex6q3Component } from './ex6/ex6q3/exq6parent/ex6q3.component';
import { Ex6q3ChildComponent } from './ex6/ex6q3/ex6q3-child/ex6q3-child.component';
import { MainPageComponent } from './spa-demo/main-page/main-page.component';
import { AboutComponent } from './spa-demo/about/about.component';
import { ContactComponent } from './spa-demo/contact/contact.component';
import { Ex8q2mainComponent } from './ex8/ex8q2/ex8q2main/ex8q2main.component';
import { Ex8q2masterComponent } from './ex8/ex8q2/ex8q2master/ex8q2master.component';
import { Ex8q2detailsComponent } from './ex8/ex8q2/ex8q2details/ex8q2details.component';
import { Ex8q1mainComponent } from './ex8/ex8q1/ex8q1main/ex8q1main.component';
import { Ex8q1welcomeComponent } from './ex8/ex8q1/ex8q1welcome/ex8q1welcome.component';
import { Ex8q1nameInputComponent } from './ex8/ex8q1/ex8q1name-input/ex8q1name-input.component';
import { Ex8q1ageInputComponent } from './ex8/ex8q1/ex8q1age-input/ex8q1age-input.component';
import { Ex8q1displayComponent } from './ex8/ex8q1/ex8q1display/ex8q1display.component';
import { Ex6q3mainComponent } from './ex6/ex6q3/ex6q3main/ex6q3main.component';
import { Ex6q3tasksComponent } from './ex6/ex6q3/ex6q3tasks/ex6q3tasks.component';
import { UserListComponent } from './homework/user-list/user-list.component';
import { TaskListComponent } from './homework/task-list/task-list.component';
import { UserComponent } from './homework/user/user.component';
import { UsersMainPageComponent } from './homework/users-main-page/users-main-page.component';
import { Ex9UserComponent } from './ex9/ex9-user/ex9-user.component';
import { Ex9AllUsersComponent } from './ex9/ex9-all-users/ex9-all-users.component';
import { Ex9AdultsComponent } from './ex9/ex9-adults/ex9-adults.component';
import { MyReducer } from './reducer';
import { Ex10MainComponent } from './ex10/ex10-main/ex10-main.component';
import { Ex10LoginComponent } from './ex10/ex10-login/ex10-login.component';
import { Ex10ProductsComponent } from './ex10/ex10-products/ex10-products.component';
import { Ex10UsersComponent } from './ex10/ex10-users/ex10-users.component';
import { Ex10MenuComponent } from './ex10/ex10-menu/ex10-menu.component';
import { Ex10GuardService } from './ex10/ex10-guard.service';
import { Ex10AuthTokenInterceptorService } from './ex10/ex10-auth-token-interceptor.service';
import { TvMainComponent } from './tv-shows/tv-main/tv-main.component';
import { TvShowComponent } from './tv-shows/tv-show/tv-show.component';

const routes: Routes = [
  //SPA demo
  // {path: "contact", component: ContactComponent},
  // {path: "about", component: AboutComponent}
  
  //Ex8Q2
  // {path: "", component: Ex8q2masterComponent},
  // {path: "user/:id", component: Ex8q2detailsComponent}

  //Ex8Q1
  // {path: "", component: Ex8q1welcomeComponent},
  // {path: "name", component: Ex8q1nameInputComponent},
  // {path: "age", component: Ex8q1ageInputComponent},
  // {path: "display", component: Ex8q1displayComponent}
  
  //Ex6Q3
  // {path: "", component: Ex6q3Component},
  // {path: "tasks/:id", component: Ex6q3tasksComponent}

  //Routing Hoemwork
  // {path: "", component: UserListComponent},
  // {path: "tasks/:id", component: TaskListComponent}

  //Ex10
  // {path: "", component: Ex10LoginComponent},
  // {path: "menu", component: Ex10MenuComponent},
  // {path: "products", component: Ex10ProductsComponent},
  // {path: "users", component: Ex10UsersComponent, canActivate: [Ex10GuardService]}

  //TV shows
  {path:"show/:id", component: TvShowComponent}
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
    ContactComponent,
    Ex8q2mainComponent,
    Ex8q2masterComponent,
    Ex8q2detailsComponent,
    Ex8q2mainComponent,
    Ex8q1mainComponent,
    Ex8q1welcomeComponent,
    Ex8q1nameInputComponent,
    Ex8q1ageInputComponent,
    Ex8q1displayComponent,
    Ex6q3mainComponent,
    Ex6q3tasksComponent,
    UserListComponent,
    TaskListComponent,
    UserComponent,
    UsersMainPageComponent,
    Ex9UserComponent,
    Ex9AllUsersComponent,
    Ex9AdultsComponent,
    Ex10MainComponent,
    Ex10MenuComponent,
    Ex10LoginComponent,
    Ex10ProductsComponent,
    Ex10UsersComponent,
    TvMainComponent,
    TvShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({reducer: MyReducer})
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: Ex10AuthTokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
