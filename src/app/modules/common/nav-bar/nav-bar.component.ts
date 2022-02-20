import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
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
  @ViewChild('dropdownToggle') dropDownToggle: ElementRef;
  @ViewChild('dropdown') dropdown: ElementRef;
  faChevronDown = faChevronDown;
  faTimes = faTimes;
  faBars = faBars;
  subscription: Subscription;
  displayAbout: boolean;
  displaySideNavBar: boolean;
  currentPage: string;

  constructor(private messageService: MessageService, private renderer: Renderer2) {
    this.displayAbout = false;
    this.displaySideNavBar = false;
    this.subscription = this.messageService.getMessage().subscribe(url => {
      if (url) {
        this.currentPage = url.text
      } else {
        this.currentPage = '/home'
      }
    });

    this.renderer.listen('window', 'click',(e:Event)=>{
     if(e.target !== this.dropdown.nativeElement && e.target !== this.dropDownToggle.nativeElement ){
         this.displayAbout = false;
     }
 });
  }

  ngOnInit(): void {
    this.displayAbout = false;
    this.displaySideNavBar = false;
  }

}