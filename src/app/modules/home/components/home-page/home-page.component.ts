import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import * as Typewriter from 't-writer.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  @ViewChild('tw') typewriterElement: ElementRef;

  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.sendMessage('/home')
  }

  ngAfterViewInit(): void {
    const target = this.typewriterElement.nativeElement;

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '#841010',
    });

    writer
      .strings(
        400,
        'Empowering Students',
        'Connecting Alumni',
        'Fostering Community'
      )
      .start();
  }

  navigateToUrl(url: string): void {
    this.router.navigate([url])
  }
}