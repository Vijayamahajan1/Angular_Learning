import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponent } from './first/first.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path:"dashboard", component:DashboardComponent
  },
  {
    path:"first", component:FirstComponent
  },
  {
    path:"second", 
    loadComponent:()=> import("./second/second.component").then(m=>m.SecondComponent)
  },
  {
    path:"company", 
    loadComponent:()=> import("./company/company.component").then(m=>m.CompanyComponent)
  },
  {
    path:"pipes", component:PipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
