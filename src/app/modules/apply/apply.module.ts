import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApplyStepsModule } from 'src/app/modules/common/apply-steps/apply-steps.module';
import { FooterModule } from 'src/app/modules/common/footer/footer.module';
import { ApplyPanelModule } from '../common/apply-panel/apply-panel.module';
import { ModalModule } from '../common/modal/modal.module';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { ApplyPageComponent } from './components/apply-page/apply-page.component';


const routes: Routes = [
  {
    path: '',
    component: ApplyPageComponent,
  },
  {
    path: 'form',
    component: ApplyFormComponent
  }
];

@NgModule({
  declarations: [ApplyPageComponent, ApplyFormComponent],
  imports: [
    RouterModule.forChild(routes),
    FooterModule,
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    ApplyStepsModule,
    ApplyPanelModule,
    ModalModule
  ],
  exports: [RouterModule]
})
export class ApplyModule {}