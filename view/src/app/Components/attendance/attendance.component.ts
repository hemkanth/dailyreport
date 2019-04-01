import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AttendanceModalComponent } from 'src/app/Modals/attendance-modal/attendance-modal.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  
  //modal
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  // Open Modal
  openCreateModal() {
    const initialState = {
      Type: 'Create'
    }
    this.modalRef = this.modalService.show(AttendanceModalComponent, Object.assign({initialState}, { class: 'modal-md' }));
  }
}
