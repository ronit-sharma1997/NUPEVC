import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from 'src/app/modules/common/footer/footer.module';
import { EventsPageComponent } from './components/events-page/events-page.component';

const routes: Routes = [
  {
    path: '',
    component: EventsPageComponent,
  },
];

@NgModule({
  declarations: [EventsPageComponent],
  imports: [
    RouterModule.forChild(routes),
    FontAwesomeModule,
    FooterModule,
    CommonModule,
  ],
  exports: [RouterModule],
})
export class EventsModule {}