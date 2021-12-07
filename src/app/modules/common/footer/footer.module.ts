import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialModule } from '../social-media/social.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [SocialModule, FontAwesomeModule, RouterModule],
  exports: [FooterComponent],
})
export class FooterModule {}