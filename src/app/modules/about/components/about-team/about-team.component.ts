import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { Subscription } from 'rxjs';

interface TeamDetails {
  img: string;
  header: string;
  description: string;
  link?: string;
  linkDescription?: string;
  description3?: string
}

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss']
})
export class AboutTeamComponent implements OnInit {
  imgUrl: string;
  header: string;
  description: string;
  linkDescription: string;
  description3: string;
  subheader: string;
  subDescription: string;
  
  subscription: Subscription

  constructor(private route: ActivatedRoute, private messageService: MessageService) {}

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe((data) => {
      this.imgUrl = data['img']
      this.header = data['header']
      this.description = data['description']
      this.linkDescription = data['linkDescription']
      this.description3 = data['description3']
      this.subheader = data['subheader']
      this.subDescription = data['subDescription']
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}