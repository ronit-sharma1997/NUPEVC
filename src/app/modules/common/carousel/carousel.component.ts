import { Component, OnInit } from '@angular/core';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  currentIndex: number
  content: any[]
  faChevronCircleLeft=faChevronCircleLeft
  faChevronCircleRight=faChevronCircleRight
  constructor() { }

  ngOnInit(): void {
    this.currentIndex = 0
    this.content = [{title: 'Shark Tank', content: "Jeff McCarthy (Partner at North Bridge Venture Partners) and Jeff Born (Associate Dean DAmore-McKim School of Business) joined us for a \'Shark Tank\' style event where Northeastern-affiliated ventures BusRight and FoodSpace pitched.", img: '../../../../assets/shark_tank.jpeg'},
                    {title: 'Summit Partners Panel', content: "Three Summit Partners Associates joined us to present their insights, experiences, and recommendations for students interested in hearing more about entering a role in Private Equity.", img: '../../../../assets/summit_event.PNG'},
                    {title: 'Snap & Chat', content: "Spring Opening event providing an opportunity for students to meet new faces and participate in a LinkedIn headshot workshop. A great opportunity to learn more about PEVC and our teams.", img: "../../../../assets/snap&chat.JPG"},
                    {title: 'Entrepreneurship Summit', content: "Co-hosted summit with Huntington Angels Network, providing unique insights into the decision making processes of knowledgable industry professionals", img: "../../../../assets/vc_entrepreneur.jpg"}]
  }

  setCurrentIndex(index: number): void {
    this.currentIndex = index;
  }

  calculateOffset(cardIndex: number): number {
    return (this.currentIndex - cardIndex) / 3;
  }

  calculateAbsOffset(cardIndex: number): number {
    return Math.abs(this.currentIndex - cardIndex) / 3;
  }

  calculateOpacity(cardIndex: number) : boolean {
    return Math.abs(this.currentIndex - cardIndex) >= 3;
  }

  calculateDisplay(cardIndex: number) : boolean {
    return Math.abs(this.currentIndex - cardIndex) > 3;
  }

  calculateTranslateX(cardIndex: number): number {
    if(this.calculateAbsOffset(cardIndex) === 0) {
      return 0
    }
    return this.calculateOffset(cardIndex) / this.calculateAbsOffset(cardIndex)
  }

}
