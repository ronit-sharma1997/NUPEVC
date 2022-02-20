import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-about-events',
  templateUrl: './about-events.component.html',
  styleUrls: ['./about-events.component.scss']
})
export class AboutEventsComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.sendMessage('/about/events')
  }

}
