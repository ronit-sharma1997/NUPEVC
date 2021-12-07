import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './modules/common/nav-bar/nav-bar.component';
import { ContactModule } from './modules/contact/contact.module';
import { EventsModule } from './modules/events/events.module';
import { HomeModule } from './modules/home/home.module';
import { NewsletterModule } from './modules/newsletter/newsletter.module';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactModule,
    EventsModule,
    FontAwesomeModule,
    NewsletterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}