import { Component, OnInit } from '@angular/core';
import {
  faBookOpen,
  faCalendar,
  faChartLine,
  faCircle,
  faHandshake,
  faMailBulk
} from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  faBookOpen = faBookOpen;
  faCircle = faCircle;
  faCalendar = faCalendar;
  faHandshake = faHandshake;
  faChartLine = faChartLine;
  faMailBulk = faMailBulk;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.sendMessage('/about')
  }
}