import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit() {
    this.messageService.sendMessage('/about')
  }

  navigateToUrl(url: string): void {
    this.router.navigate(['about', url])
  }
}