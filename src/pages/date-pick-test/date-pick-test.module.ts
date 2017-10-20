import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatePickTestPage } from './date-pick-test';

@NgModule({
  declarations: [
    DatePickTestPage,
  ],
  imports: [
    IonicPageModule.forChild(DatePickTestPage),
  ],
})
export class DatePickTestPageModule {}
