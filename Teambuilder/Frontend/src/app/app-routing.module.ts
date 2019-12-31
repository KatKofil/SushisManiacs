import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Register/register/register.component';
import { ProfileComponent } from './Profile/profile/profile.component'
import { TeamComponent } from './Team/team/team.component'
import { StuffComponent } from './Stuff/stuff/stuff.component'
import { CaracterComponent } from './Caracter/caracter/caracter.component'
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
    path:'profile',
    component:ProfileComponent,
    canActivate: [AuthGuard],
    data:{
      title: "Profile" 
    },
  },
  {
    path:'team',
    component:TeamComponent,
    canActivate: [AuthGuard],
    data:{
      title: "Team" 
    },
  },
  {
    path:'caracter',
    component:CaracterComponent,
    canActivate: [AuthGuard],
    data:{
      title: "Caracter" 
    },
  },
  {
    path:'stuff',
    component:StuffComponent,
    canActivate: [AuthGuard],
    data:{
      title: "Stuff" 
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
