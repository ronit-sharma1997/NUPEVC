import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from 'src/app/modules/common/footer/footer.module';
import { ApplyPanelModule } from '../common/apply-panel/apply-panel.module';
import { ApplyStepsModule } from '../common/apply-steps/apply-steps.module';
import { SubscribeModule } from '../common/subscribe/subscribe.module';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AboutMarketingComponent } from './components/about-marketing/about-marketing.component';
import { AboutTeamComponent } from './components/about-team/about-team.component';
import { AboutEboardComponent } from './components/about-eboard/about-eboard.component';
import { AdvisorPageComponent } from './components/advisor-page/advisor-page.component';
import { AlumniCardComponent } from './components/alumni-card/alumni-card.component';
import { AlumniTeamComponent } from './components/alumni-team/alumni-team.component';
import { EboardCardComponent } from './components/eboard-card/eboard-card.component';
import { AboutEventsComponent } from './components/about-events/about-events.component';
import { CarouselModule } from '../common/carousel/carousel.module';
import { AboutResearchComponent } from './components/about-research/about-research.component';
import { NewsletterModule } from '../common/newsletter/newsletter.module';
import { AboutEducationComponent } from './components/about-education/about-education.component';
import { UrlPipe } from 'src/app/pipes/url-pipe';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
  },
  {
    path: 'e-board',
    component: AboutEboardComponent,
  },
  {
    path: 'alumni',
    component: AlumniTeamComponent,
  },
  {
    path: 'advisor',
    component: AdvisorPageComponent,
  },
  {
    path: 'events',
    component: AboutEventsComponent,
    data: {
      header: 'Events',
      img: '../../../assets/isec.jpg',
      description: 'PEVC holds several events each semester in hopes of engaging students with exceptional professionals in the space through initiatives such as: fireside chats, panels, case studies, and a \'Shark Tank\' event where two Northeastern ventures pitch to real investors. Check out our ',
      link: '/events',
      linkDescription: 'events schedule',
      description3: ' to see our upcoming programming.',
      subheader: 'PEVC Events'
    }
  },
  {
    path: 'education',
    component: AboutEducationComponent,
    data: {
      header: 'Education',
      img: '../../../assets/isec.jpg',
      description: 'The Education team seeks to provide students with a hands-on understanding of key concepts in the PE/VC space through a 8-week intensive bootcamp. This course will cover crucial topics to jumpstarting a career in the buy-side industry from fund structure to valuation calculations.',
      subheader: 'Education Bootcamp'
    }
  },
  {
    path: 'marketing',
    component: AboutMarketingComponent,
    data: {
      header: 'Marketing',
      img: '../../../assets/isec.jpg',
      description: 'The Marketing team is crucial to PEVC and provides students with opportunities to flex their creativity. Students can design graphics, merchandise, and other marketing materials or practice professional writing skills through the curation of our weekly newsletter.',
      subheader: 'Our Instagram'
    }
  },
  {
    path: 'research',
    component: AboutResearchComponent,
    data: {
      header: 'Research',
      img: '../../../assets/isec.jpg',
      description: 'The Research team conducts analysis on private market activity curated into a biweekly analyst report. Students have the opportunity to specialize in industries that peak their interests and delve deeper into key topics relevant to a career in private equity & venture capital.',
      subheader: 'Newsletters'
    }
  }
];

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutEboardComponent,
    AboutMarketingComponent,
    AboutEventsComponent,
    AboutResearchComponent,
    AboutTeamComponent,
    EboardCardComponent,
    AlumniCardComponent,
    AlumniTeamComponent,
    AdvisorPageComponent,
    AboutEducationComponent,
    UrlPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FontAwesomeModule,
    FooterModule,
    ApplyStepsModule,
    ApplyPanelModule,
    SubscribeModule,
    CarouselModule,
    NewsletterModule
  ],
  exports: [RouterModule],
})
export class AboutModule {}