import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentrs
import { LoginComponent } from './Components/login/login.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { ReportComponent } from './Components/report/report.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
