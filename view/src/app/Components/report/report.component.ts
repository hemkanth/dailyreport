import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ReportModalComponent } from 'src/app/Modals/report-modal/report-modal.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
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
    this.modalRef = this.modalService.show(ReportModalComponent, Object.assign({ initialState }, { class: 'modal-md' }));
  }
}
