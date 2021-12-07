import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from 'src/app/modules/common/footer/footer.module';
import { SubscribeModule } from '../common/subscribe/subscribe.module';
import { AnimatedNumberComponent } from './components/animated-number/animated-number.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent, AnimatedNumberComponent],
  imports: [RouterModule.forChild(routes), FontAwesomeModule, FooterModule, SubscribeModule],
  exports: [RouterModule],
})
export class HomeModule {}