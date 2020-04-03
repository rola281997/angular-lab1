import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'user',
    component: UserDataComponent,
    data: { title: 'User' }
  },
  { path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
