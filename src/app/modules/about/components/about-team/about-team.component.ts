import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/models/team-member';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss'],
})
export class AboutTeamComponent implements OnInit {
  team: TeamMember[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.team = [
      {
        name: 'Terry Chen',
        title: 'President',
        linkedIn: 'https://www.linkedin.com/in/terrychen22/',
        email: 'terry.chen531@gmail.com',
        img: '../../assets/president.jpg',
      },
      {
        name: 'Joey Waters',
        title: 'Vice President',
        linkedIn: 'https://www.linkedin.com/in/joey-waters/',
        email: 'terry.chen531@gmail.com',
        img: '../../assets/vice-president.jpg',
      },
      {
        name: 'PJ Marsh',
        title: 'Co-Director of Research',
        linkedIn: 'https://www.linkedin.com/in/pmarshjr/',
        email: 'terry.chen531@gmail.com',
        img: '../../assets/research-chair.png',
      },
      {
        name: 'Adam inzelstein',
        title: 'Co-Director of Research',
        linkedIn: 'https://www.linkedin.com/in/adam-inzelstein/',
        email: 'terry.chen531@gmail.com',
        img: '../../assets/co-research-chair.png',
      },
      {
        name: 'Anush Shah',
        title: 'Director of Education',
        linkedIn: 'https://www.linkedin.com/in/anushshah/',
        email: 'terry.chen531@gmail.com',
        img: '../../assets/education-chair.png',
      },
      {
        name: 'Leila Storkamp',
        title: 'Co-Director of Events',
        linkedIn: 'https://www.linkedin.com/in/leilastorkamp/',
        email: 'terry.chen531@gmail.com',
        img: '../../assets/events-chair.png',
      },
      {
        name: 'Aidan Perry',
        title: 'Co-Director of Events',
        linkedIn: 'https://www.linkedin.com/in/aidan-perry-702bba196/',
        email: 'terry.chen531@gmail.com',
        img: '../../assets/co-events-chair.png',
      },
      {
        name: 'Evelyn Wong',
        title: 'Director of Marketing',
        linkedIn: 'https://www.linkedin.com/in/evelynwwong/',
        email: 'terry.chen531@gmail.com',
        img: '../../assets/marketing-chair.png',
      },
    ];
    this.messageService.sendMessage('/about')
  }
}