import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AgentComponent } from './agent/agent.component';
const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'admin',component:AdminComponent},
    {path:'user',component:UserComponent},
    {path:'agent',component:AgentComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
