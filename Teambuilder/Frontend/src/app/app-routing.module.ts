import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';


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
