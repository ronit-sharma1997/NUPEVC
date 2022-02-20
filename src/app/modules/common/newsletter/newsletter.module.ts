import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from 'src/app/modules/common/footer/footer.module';
import { NewsletterPageComponent } from './newsletter-page.component';

@NgModule({
  declarations: [NewsletterPageComponent],
  imports: [
    FontAwesomeModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [NewsletterPageComponent],
})
export class NewsletterModule {}