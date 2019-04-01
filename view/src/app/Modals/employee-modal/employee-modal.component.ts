import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css']
})
export class EmployeeModalComponent implements OnInit {
  // predefined variable
  Type: string;

  // User variable
  PWD_visible: Boolean = false;
  CPWD_visible: Boolean = false;

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  ToggleVisibility(type) {
    if (type === 'PWD') {
      this.PWD_visible = (this.PWD_visible === true) ? false : true;
    } else {
      this.CPWD_visible = (this.CPWD_visible === true) ? false : true;
    }
  }

}
