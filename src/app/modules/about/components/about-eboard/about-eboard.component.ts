import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/models/team-member';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-about-eboard',
  templateUrl: './about-eboard.component.html',
  styleUrls: ['./about-eboard.component.scss'],
})
export class AboutEboardComponent implements OnInit {
  team: TeamMember[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.team = [
      {
        name: 'Terry Chen',
        title: 'President',
        linkedIn: 'https://www.linkedin.com/in/terrychen22/',
        email: 'chen.ter@northeastern.edu',
        img: '../../assets/president.jpg',
      },
      {
        name: 'Joey Waters',
        title: 'Vice President',
        linkedIn: 'https://www.linkedin.com/in/joey-waters/',
        email: 'waters.j@northeastern.edu',
        img: '../../assets/vice-president.jpg',
      },
      {
        name: 'PJ Marsh',
        title: 'Co-Director of Research',
        linkedIn: 'https://www.linkedin.com/in/pmarshjr/',
        email: 'marsh.p@northeastern.edu',
        img: '../../assets/research-chair.png',
      },
      {
        name: 'Adam inzelstein',
        title: 'Co-Director of Research',
        linkedIn: 'https://www.linkedin.com/in/adam-inzelstein/',
        email: 'inzelstein.a@northeastern.edu',
        img: '../../assets/co-research-chair.png',
      },
      // {
      //   name: 'Anush Shah',
      //   title: 'Director of Education',
      //   linkedIn: 'https://www.linkedin.com/in/anushshah/',
      //   email: 'terry.chen531@gmail.com',
      //   img: '../../assets/education-chair.png',
      // },
      {
        name: 'Olivia Meredith',
        title: 'Director of Events',
        linkedIn: 'https://www.linkedin.com/in/olivia-meredith-31739a1b2',
        email: 'meredith.o@northeastern.edu',
        img: '../../assets/events-chair.jpg',
      },
      {
        name: 'Evelyn Wong',
        title: 'Director of Marketing',
        linkedIn: 'https://www.linkedin.com/in/evelynwwong/',
        email: 'wong.eve@northeastern.edu',
        img: '../../assets/marketing-chair.png',
      },
    ];
    this.messageService.sendMessage('/about')
  }
}