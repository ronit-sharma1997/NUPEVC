import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselCardModule } from '../carousel-card/carousel-card.module';
import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CarouselCardModule, FontAwesomeModule, RouterModule, CommonModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}