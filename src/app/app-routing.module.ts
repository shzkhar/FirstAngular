import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LogoutComponent } from './logout/logout.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListbookComponent } from './listbook/listbook.component';
import { BookcriteriaComponent } from './bookcriteria/bookcriteria.component';

const routes: Routes = [
  {
    component:SignupComponent, 
    path:"signup"
  },
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:ForgotpasswordComponent,
    path:"forgotpassword"
  },
  {
    component:SignupComponent,
    path:""
  },
  {
    component:LogoutComponent,
    path:"logout"
  },
  {
    component:AddBookComponent,
    path:"addbook"
  },
  {
    component:ListbookComponent,
    path:"listbook"
  },
  {
   component:BookcriteriaComponent,
   path:"bookcriteria"
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
