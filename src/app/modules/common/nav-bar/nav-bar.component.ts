import { Component, OnInit } from '@angular/core';
import {
  faBars,
  faChevronDown,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  faChevronDown = faChevronDown;
  faTimes = faTimes;
  faBars = faBars;
  subscription: Subscription;
  displayAbout: boolean;
  displaySideNavBar: boolean;
  currentPage: string;

  constructor(private messageService: MessageService) {
    this.displayAbout = false;
    this.displaySideNavBar = false;
    this.subscription = this.messageService.getMessage().subscribe(url => {
      if (url) {
        this.currentPage = url.text
      } else {
        this.currentPage = '/home'
      }
    });
  }

  ngOnInit(): void {
    this.displayAbout = false;
    this.displaySideNavBar = false;
  }

}