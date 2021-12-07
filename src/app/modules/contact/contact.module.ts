import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from 'src/app/modules/common/footer/footer.module';
import { SocialModule } from 'src/app/modules/common/social-media/social.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
  },
];

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    RouterModule.forChild(routes),
    FontAwesomeModule,
    FooterModule,
    SocialModule,
  ],
  exports: [RouterModule],
})
export class ContactModule {}