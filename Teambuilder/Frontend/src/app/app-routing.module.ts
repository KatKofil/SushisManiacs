import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';


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
    path:'news',
    component:NewsComponent,
    data:{
      title: "News" 
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
