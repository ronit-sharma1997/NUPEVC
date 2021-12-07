import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialMediaComponent } from './social-media.component';

@NgModule({
  declarations: [SocialMediaComponent],
  imports: [FontAwesomeModule],
  exports: [SocialMediaComponent],
})
export class SocialModule {}