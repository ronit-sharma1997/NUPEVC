import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() description: string
  @Input() submitMessage: string
  @Input() success: boolean
  @ViewChild('content') modal: ElementRef;
  @ViewChild('newcontent') otherModal: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(): void {
    this.modalService.open(this.modal, { centered: true, keyboard: false, backdrop: 'static' })
  }

  openResult(): void {
    this.modalService.open(this.otherModal, { centered: true, keyboard: false, backdrop: 'static' })
  }

  close(): void {
    this.modalService.dismissAll()
  }

}
