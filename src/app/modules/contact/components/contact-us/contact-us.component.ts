import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactUs } from 'src/app/models/contact-us';
import { ModalComponent } from 'src/app/modules/common/modal/modal.component';
import { AWSService } from 'src/app/services/aws.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  formData: ContactUs
  successfulSubmit: boolean 
  submitMessage: string
  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(private messageService: MessageService, private awsService: AWSService) { }

  ngOnInit(): void {
    this.formData = {
      name: '',
      email: '',
      message: ''
    }
    this.messageService.sendMessage('/contact-us')
    this.successfulSubmit = false;
  }

  submitForm() {
    this.modal.open()
    this.awsService.sendMessage(this.formData).subscribe({next: (response: any) => {
        this.successfulSubmit = true;
        this.submitMessage = 'Successfully Sent!'
        this.formData = {
          name: '',
          email: '',
          message: ''
        }
        this.modal.openResult()
    }, error: (error: Error) => {this.modal.close(); this.successfulSubmit = false; this.submitMessage = error.message; this.modal.openResult()}})

  }

  isInvalidForm(): boolean {
    return this.formData.name === '' || this.formData.email === '' || this.formData.message === ''
  }

}
