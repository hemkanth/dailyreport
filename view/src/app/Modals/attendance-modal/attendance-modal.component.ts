import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-attendance-modal',
  templateUrl: './attendance-modal.component.html',
  styleUrls: ['./attendance-modal.component.css']
})
export class AttendanceModalComponent implements OnInit {
  // predefined variable
  Type: string;

  // User Variables
  Hours: any[] = [];
  Minutes: any[] = [];
  Attendance: any[] = [
    {Key: 'Full Day', Value: 'Full_Day'},
    {Key: 'Half Day', Value: 'Half_Day'},
    {Key: 'On Duty', Value: 'On_Duty'},
    {Key: 'Absent', Value: 'Absent'}
  ];

  constructor(
    private bsModalRef: BsModalRef
  ) {
    for (let i = 0; i < 24; i++) {
      var temp = i + 1;
      if (this.Hours.length < 10) {
        this.Hours.push({Key: '0' + temp.toString(), Value: '0' + temp.toString()});
      } else {
        this.Hours.push({Key: temp.toString(), Value: temp.toString()});
      }
    };
    for (let j = 0; j < 60; j++) {
      if (this.Minutes.length < 10) {
        this.Minutes.push({Key: '0' + j.toString(), Value: '0' + j.toString()});
      } else {
        this.Minutes.push({Key: j.toString(), Value: j.toString()});
      }
    };
  }

  ngOnInit() {
  }
  InTimeHours() {
    
  }

}
