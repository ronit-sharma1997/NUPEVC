import { Component, Input, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TeamMember } from 'src/app/models/team-member';

@Component({
  selector: 'app-eboard-card',
  templateUrl: './eboard-card.component.html',
  styleUrls: ['./eboard-card.component.scss'],
})
export class EboardCardComponent implements OnInit {
  @Input() teamMember: TeamMember;
  @Input() color: string;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  ngOnInit(): void {}

  navigateToUrl(url: string): void {
    window.open(url, '_blank');
  }
}