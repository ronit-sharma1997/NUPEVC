import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselCardComponent } from './carousel-card.component';

@NgModule({
  declarations: [CarouselCardComponent],
  imports: [RouterModule, CommonModule],
  exports: [CarouselCardComponent],
})
export class CarouselCardModule {}