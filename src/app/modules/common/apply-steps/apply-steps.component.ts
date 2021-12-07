import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-steps',
  templateUrl: './apply-steps.component.html',
  styleUrls: ['./apply-steps.component.scss']
})
export class ApplyStepsComponent implements OnInit {
  @Input() title: string
  @Input() description: string
  constructor() { }

  ngOnInit(): void {
  }

}