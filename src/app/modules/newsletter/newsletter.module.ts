import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from 'src/app/modules/common/footer/footer.module';
import { NewsletterPageComponent } from './components/newsletter-page/newsletter-page.component';

const routes: Routes = [
  {
    path: '',
    component: NewsletterPageComponent,
  },
];

@NgModule({
  declarations: [NewsletterPageComponent],
  imports: [
    RouterModule.forChild(routes),
    FontAwesomeModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [RouterModule],
})
export class NewsletterModule {}