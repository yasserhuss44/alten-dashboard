import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashBoardComponent}from './dashboard/dashboard.component';
const routes: Routes = [
   { path: 'dashboard', component: DashBoardComponent },
   { path: '', component: DashBoardComponent },
   { path: '',   redirectTo: '/dashboard',   pathMatch: 'full'
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
