import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

interface TeamDetails {
  img: string;
  header: string;
  description: string;
  link?: string;
  linkDescription?: string;
  description3?: string
}

@Component({
  selector: 'app-about-specific-team',
  templateUrl: './about-specific-team.component.html',
  styleUrls: ['./about-specific-team.component.scss']
})
export class AboutSpecificTeamComponent implements OnInit {
  teamMap: Map<string, TeamDetails>;
  teamDetails: TeamDetails;
  imgUrl: string;
  header: string;
  description: string;

  constructor(private router: Router, private messageService: MessageService) {
    this.teamMap = new Map<string, TeamDetails>();

    this.teamMap.set('education', {
      header: 'Education Team',
      img: '../../../assets/isec.jpg',
      description: 'The Education team seeks to provide students with a hands-on understanding of key concepts in the PE/VC space through a 8-week intensive bootcamp. This course will cover crucial topics to jumpstarting a career in the buy-side industry from fund structure to valuation calculations.'
    });
    this.teamMap.set('research', {
      header: 'Research Team',
      img: '../../../assets/isec.jpg',
      description: 'The Research team conducts analysis on private market activity curated into a biweekly analyst report (link). Students have the opportunity to specialize in industries that peak their interests and delve deeper into key topics relevant to a career in PE/VC'
    });
    this.teamMap.set('marketing', {
      header: 'Marketing Team',
      img: '../../../assets/isec.jpg',
      description: 'The Marketing team is crucial to PEVC and provides students with opportunities to flex their creativity. Students can design graphics, merchandise, and other marketing materials or practice professional writing skills through the curation of our weekly newsletter.'
    });
    this.teamMap.set('events', {
      header: 'Events Team',
      img: '../../../assets/isec.jpg',
      description: 'PEVC holds several events each semester in hopes of engaging students with exceptional professionals in the space through initiatives such as: fireside chats, panels, case studies, and a \'Shark Tank\' event where 2 Northeastern ventures pitch to real investors. Check out our ',
      link: '/events',
      linkDescription: 'events schedule',
      description3: ' to see our upcoming programming.'
    });
  }

  ngOnInit(): void {
    this.messageService.sendMessage(this.router.url)
    this.teamDetails = this.teamMap.get(this.router.url.split('/')[2])!;
    this.imgUrl = this.teamDetails?.img || '';
    this.header = this.teamDetails?.header || '';
    this.description = this.teamDetails?.description || '';
  }

}