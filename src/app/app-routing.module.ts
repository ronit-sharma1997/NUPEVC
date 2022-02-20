import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './modules/about/about.module';
import { ApplyModule } from './modules/apply/apply.module';
import { ContactModule } from './modules/contact/contact.module';
import { EventsModule } from './modules/events/events.module';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => HomeModule,
  },
  {
    path: 'about',
    loadChildren: () => AboutModule,
  },
  {
    path: 'contact-us',
    loadChildren: () => ContactModule,
  },
  {
    path: 'events',
    loadChildren: () => EventsModule,
  },
  // {
  //   path: 'newsletter',
  //   loadChildren: () => NewsletterModule,
  // },
  {
    path: 'apply',
    loadChildren: () => ApplyModule,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}