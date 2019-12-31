import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Register/register/register.component';
import { from } from 'rxjs';
import { AuthGuard } from './_helper/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home',
    component:HomepageComponent,
    data:{
      title: "Home" 
    },
  },
  {
    path:'login',
    component:LoginComponent,
    data:{
      title: "Login" 
    },
  },  
  {
    path:'register',
    component:RegisterComponent,
    data:{
      title: "Register" 
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
