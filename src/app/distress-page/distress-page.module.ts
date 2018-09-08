import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistressPageComponent } from './distress-page.component';
import { DistressFeedbackPageModule } from '../distress-feedback-page/distress-feedback-page.module';

@NgModule({
  imports: [
    CommonModule,
    DistressFeedbackPageModule
  ],
  exports: [
    DistressPageComponent
  ],
  declarations: [DistressPageComponent]
})
export class DistressPageModule { }
