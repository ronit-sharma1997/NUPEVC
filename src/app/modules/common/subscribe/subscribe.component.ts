import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AWSService } from 'src/app/services/aws.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  @Input() title: string
  email: string
  successfulSubmit: boolean 
  submitMessage: string
  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(private awsService: AWSService) { }

  ngOnInit(): void {
  }

  subscribeToNewsletter($event: Event): void {
    $event.preventDefault()
    this.awsService.subscribe(this.email).subscribe({next: (response: any) => {
      this.successfulSubmit = true;
      this.submitMessage = 'Successfully Subscribed!'
      this.modal.openResult()
  }, error: (error: Error) => {this.modal.close(); this.successfulSubmit = false; this.submitMessage = error.message; this.modal.openResult()}})
  }

  navigateToUrl(url: string): void {
    window.open(url, '_blank')
  }
}