import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/models/team-member';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-alumni-team',
  templateUrl: './alumni-team.component.html',
  styleUrls: ['./alumni-team.component.scss'],
})
export class AlumniTeamComponent implements OnInit {
  alumni: TeamMember[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.alumni = [
      {
        name: 'Ken Graham',
        title: 'Investment Associate at ',
        img: '../../../../../assets/ken_graham.png',
        linkedIn: 'https://www.linkedin.com/in/grahamk3/',
        email: '',
        company: 'a.k.a Brands',
        companyUrl: 'https://www.aka-brands.com/',
        grade: 'Class of 2019'
      },
      {
        name: 'Mark Nevins',
        title: 'Analyst at ',
        img: '../../../../../assets/mark_nevins.png',
        linkedIn: 'https://www.linkedin.com/in/mark-nevins-150653101/',
        email: '',
        company: 'Waterfall Asset Management',
        companyUrl: 'https://www.waterfallam.com/',
        grade: 'Class of 2021'
      },
      {
        name: 'Miranda Nimmer',
        title: 'Equity Capital Markets Analyst at ',
        img: '../../../../../assets/miranda_nimmer.png',
        linkedIn: 'https://www.linkedin.com/in/miranda-nimmer/',
        email: '',
        company: 'Citigroup',
        companyUrl: 'https://www.citigroup.com/citi/',
        grade: 'Class of 2021'
      },
      {
        name: 'Nisha Rangarajan',
        title: 'Analyst at ',
        img: '../../../../../assets/nisha_ran.png',
        linkedIn: 'https://www.linkedin.com/in/nisharangarajan/',
        email: '',
        company: 'Insight Partners',
        companyUrl: 'https://www.insightpartners.com/',
        grade: 'Class of 2021'
      },
      {
        name: 'Jack McKim',
        title: 'Incoming Analyst at ',
        img: '../../../../../assets/jack_mckim.png',
        linkedIn: 'https://www.linkedin.com/in/jackmckim4/',
        email: '',
        company: 'Silversmith Capital Partners',
        companyUrl: 'https://www.silversmith.com/',
        grade: 'Class of 2022'
      },
      {
        name: 'Justin Streicher',
        title: 'Incoming Analyst at ',
        img: '../../../../../assets/justin_streicher.png',
        linkedIn: 'https://www.linkedin.com/in/justin-streicher/',
        email: '',
        company: 'Raymond James',
        companyUrl: 'https://www.raymondjames.com/',
        grade: 'Class of 2022'
      },
      {
        name: 'Joey Waters',
        title: 'Investment Analyst at ',
        img: '../../../../../assets/vice-president.jpg',
        linkedIn: 'https://www.linkedin.com/in/joey-waters/',
        email: '',
        company: 'Hercules Capital',
        companyUrl: 'https://www.htgc.com/',
        grade: 'Class of 2022'
      },
    ];
    this.alumni.reverse()
    this.messageService.sendMessage('/about')
  }
}