import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from 'src/app/modules/common/footer/footer.module';
import { ApplyPanelModule } from '../common/apply-panel/apply-panel.module';
import { ApplyStepsModule } from '../common/apply-steps/apply-steps.module';
import { SubscribeModule } from '../common/subscribe/subscribe.module';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AboutSpecificTeamComponent } from './components/about-specific-team/about-specific-team.component';
import { AboutTeamComponent } from './components/about-team/about-team.component';
import { AdvisorPageComponent } from './components/advisor-page/advisor-page.component';
import { AlumniCardComponent } from './components/alumni-card/alumni-card.component';
import { AlumniTeamComponent } from './components/alumni-team/alumni-team.component';
import { EboardCardComponent } from './components/eboard-card/eboard-card.component';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
  },
  {
    path: 'e-board',
    component: AboutTeamComponent,
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
    component: AboutSpecificTeamComponent
  },
  {
    path: 'education',
    component: AboutSpecificTeamComponent
  },
  {
    path: 'marketing',
    component: AboutSpecificTeamComponent
  },
  {
    path: 'research',
    component: AboutSpecificTeamComponent
  }
];

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutTeamComponent,
    AboutSpecificTeamComponent,
    EboardCardComponent,
    AlumniCardComponent,
    AlumniTeamComponent,
    AdvisorPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FontAwesomeModule,
    FooterModule,
    ApplyStepsModule,
    ApplyPanelModule,
    SubscribeModule
  ],
  exports: [RouterModule],
})
export class AboutModule {}