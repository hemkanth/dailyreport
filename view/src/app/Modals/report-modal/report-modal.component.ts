import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent implements OnInit {
  // predefined variable
  Type: string;

  // User Variables
  Hours: any[] = [];
  Minutes: any[] = [];
  Status: any[] = [
    {Key: 'Completed', Value: 'Completed'},
    {Key: 'In-Progress', Value: 'In_Progress'},
    {Key: 'Skipped', Value: 'Skipped'},
  ];
  constructor(
    private bsModalRef: BsModalRef
  ) {
    for (let i = 0; i < 24; i++) {
      var temp = i + 1;
      if (this.Hours.length < 10) {
        this.Hours.push({ Key: '0' + temp.toString(), Value: '0' + temp.toString() });
      } else {
        this.Hours.push({ Key: temp.toString(), Value: temp.toString() });
      }
    };
    for (let j = 0; j < 60; j++) {
      if (this.Minutes.length < 10) {
        this.Minutes.push({ Key: '0' + j.toString(), Value: '0' + j.toString() });
      } else {
        this.Minutes.push({ Key: j.toString(), Value: j.toString() });
      }
    };
  }

  ngOnInit() {
  }

}
