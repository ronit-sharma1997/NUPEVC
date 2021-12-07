import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-apply-page',
  templateUrl: './apply-page.component.html',
  styleUrls: ['./apply-page.component.scss']
})
export class ApplyPageComponent implements OnInit {
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.sendMessage('/apply')
  }
}