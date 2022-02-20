import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSlack,
} from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  faInstragram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faSlack = faSlack;
  faCircle = faCircle;

  ngOnInit(): void {}

  navigateToUrl(url: string): void {
    window.open(url, '_blank')
  }
}