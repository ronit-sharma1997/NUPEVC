import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-animated-number',
  templateUrl: './animated-number.component.html',
  styleUrls: ['./animated-number.component.scss'],
})
export class AnimatedNumberComponent {
  @Input() duration: number;
  @Input() digit: number;
  counter: number = 0;
  @Input() steps: number;
  @ViewChild('animatedDigit') animatedDigit: ElementRef;
  seen: boolean = false;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onWindowScroll(event: Event) {
    var rect = this.animatedDigit.nativeElement.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    if (elemBottom + elemTop <= window.innerHeight && this.seen == false) {
      if (this.digit) {
        this.animateCount();
        this.seen = true;
      }
    }
  }

  animateCount() {
    if (!this.duration) {
      this.duration = 1000;
    }

    if (typeof this.digit === 'number') {
      this.counterFunc(this.digit, this.duration, this.animatedDigit);
    }
  }

  counterFunc(endValue: number, durationMs: number, element: ElementRef) {
    if (!this.steps) {
      this.steps = 12;
    }

    const stepCount = Math.abs(durationMs / this.steps);
    const valueIncrement = (endValue - 0) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    function step() {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

      if (element) {
        element.nativeElement.textContent = Math.abs(Math.floor(currentValue));
      }

      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }
}