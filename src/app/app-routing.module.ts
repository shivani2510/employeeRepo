import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { ManageAthleteComponent } from './feature/manage-athlete/manage-athlete.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'manage',component:ManageAthleteComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
