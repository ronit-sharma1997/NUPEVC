import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-panel',
  templateUrl: './apply-panel.component.html',
  styleUrls: ['./apply-panel.component.scss']
})
export class ApplyPanelComponent implements OnInit {
  @Input() title: string
  @Input() subHeader: string
  @Input() url: string
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoForm(): void {
    // this.router.navigate(['/apply/form'])
    this.router.navigate([this.url])
  }

}