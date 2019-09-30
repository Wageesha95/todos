import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';

//welcome
const routes: Routes = [

  
  {path : '', component:LoginComponent},

  {path : 'login', component:LoginComponent},
  
  {path: 'welcome/:name', component:WelcomeComponent},

  {path: 'todos', component:ListToDoComponent},

  {path : '**', component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
