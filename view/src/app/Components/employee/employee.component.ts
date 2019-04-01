import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeModalComponent } from 'src/app/Modals/employee-modal/employee-modal.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
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
    this.modalRef = this.modalService.show(EmployeeModalComponent, Object.assign({ initialState }, { class: 'modal-md' }));
  }
}
