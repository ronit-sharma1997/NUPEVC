import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

interface TeamDetails {
  img: string;
  header: string;
}

@Component({
  selector: 'app-about-specific-team',
  templateUrl: './about-specific-team.component.html',
  styleUrls: ['./about-specific-team.component.scss']
})
export class AboutSpecificTeamComponent implements OnInit {
  teamMap: Map<string, TeamDetails>;
  imgUrl: string;
  header: string;

  constructor(private router: Router, private messageService: MessageService) {
    this.teamMap = new Map<string, TeamDetails>();

    this.teamMap.set('education', {
      header: 'Education Team',
      img: '../../../assets/isec.png',
    });
    this.teamMap.set('research', {
      header: 'Research Team',
      img: '../../../assets/isec.png',
    });
    this.teamMap.set('outreach', {
      header: 'Outreach Team',
      img: '../../../assets/isec.png',
    });
    this.teamMap.set('events', {
      header: 'Events Team',
      img: '../../../assets/isec.png',
    });
  }

  ngOnInit(): void {
    this.messageService.sendMessage(this.router.url)
    const teamDetails = this.teamMap.get(this.router.url.split('/')[2]);
    this.imgUrl = teamDetails?.img || '';
    this.header = teamDetails?.header || '';
  }

}