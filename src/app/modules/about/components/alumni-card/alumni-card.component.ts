import { Component, Input, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AdvisorMember } from 'src/app/models/advisor';

@Component({
  selector: 'app-alumni-card',
  templateUrl: './alumni-card.component.html',
  styleUrls: ['./alumni-card.component.scss'],
})
export class AlumniCardComponent implements OnInit {
  @Input() advisor: AdvisorMember;
  faLinkedin = faLinkedin;

  ngOnInit(): void {}

  navigateToUrl(url: string): void {
    window.open(url, '_blank');
  }
}