import { Component, OnInit } from '@angular/core';
import { faHeart, faComment, faPlay } from '@fortawesome/free-solid-svg-icons'
import { InstagramProfile } from 'src/app/models/instagram-profile';
import { InstagramService } from 'src/app/services/instagram.service';
import { MessageService } from 'src/app/services/message.service';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-marketing',
  templateUrl: './about-marketing.component.html',
  styleUrls: ['./about-marketing.component.scss']
})
export class AboutMarketingComponent implements OnInit {
  profile: InstagramProfile
  faHeart=faHeart
  faComment=faComment
  faPlay=faPlay
  faCircleNotch=faCircleNotch
  isLoading: boolean;

  constructor(private instagramService: InstagramService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.instagramService.getLatestContent().then((profile: any) => {
          this.profile = profile
          this.isLoading = false;
    })
    this.messageService.sendMessage('/about/marketing')
  }

  navigateToUrl(url: string): void {
    window.open(url, '_blank');
  }
}
