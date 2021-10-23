import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {path: 'sign-in', component: LoginComponent},
];
@NgModule({
  declarations: [],
  exports: [RouterModule, CommonModule],
  imports: [
    [RouterModule.forRoot(routes)],
  ]
})
export class AppRoutingModule { }
