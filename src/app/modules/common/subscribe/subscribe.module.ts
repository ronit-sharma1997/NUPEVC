import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from '../modal/modal.module';
import { SubscribeComponent } from './subscribe.component';

@NgModule({
  declarations: [SubscribeComponent],
  imports: [FormsModule, ModalModule],
  exports: [SubscribeComponent],
})
export class SubscribeModule {}