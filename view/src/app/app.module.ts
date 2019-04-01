import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material';

// Ngx
import { ModalModule } from 'ngx-bootstrap';

// Component
import { AppComponent } from './app.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { ReportComponent } from './Components/report/report.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AttendanceModalComponent } from './Modals/attendance-modal/attendance-modal.component';
import { ReportModalComponent } from './Modals/report-modal/report-modal.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { EmployeeModalComponent } from './Modals/employee-modal/employee-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    ReportComponent,
    LoginComponent,
    DashboardComponent,
    AttendanceModalComponent,
    ReportModalComponent,
    EmployeeComponent,
    EmployeeModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    ModalModule.forRoot()
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AttendanceModalComponent,
    ReportModalComponent,
    EmployeeModalComponent
  ]
})
export class AppModule { }
