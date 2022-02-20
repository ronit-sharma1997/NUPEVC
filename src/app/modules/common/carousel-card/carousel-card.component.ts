import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss']
})
export class CarouselCardComponent implements OnInit {
  @Input() activeIndex: number
  @Input() cardIndex: number
  @Input() title:string
  @Input() content:string
  offset: number
  absOffset: number
  opacity: boolean
  display: boolean
  translateX: number
  maxVisibility: number = 3

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.offset = (changes['activeIndex'].currentValue - this.cardIndex) / 3;
    this.absOffset = Math.abs(changes['activeIndex'].currentValue - this.cardIndex) / 3;
    this.translateX = this.offset / this.absOffset
    this.opacity = Math.abs(changes['activeIndex'].currentValue - this.cardIndex) >= this.maxVisibility
    this.display = Math.abs(changes['activeIndex'].currentValue - this.cardIndex) > this.maxVisibility
  }

}
