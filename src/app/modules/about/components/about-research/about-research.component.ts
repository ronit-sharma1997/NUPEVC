import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-about-research',
  templateUrl: './about-research.component.html',
  styleUrls: ['./about-research.component.scss']
})
export class AboutResearchComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.sendMessage('/about/research')
  }

}
