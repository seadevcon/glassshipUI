import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPageComponent } from './status-page.component';
import { RatingPageModule } from '../rating-page/rating-page.module';
import { DistressPageModule } from '../distress-page/distress-page.module';

@NgModule({
  imports: [
    CommonModule,
    RatingPageModule,
    DistressPageModule
  ],
  exports: [
    StatusPageComponent
  ],
  declarations: [StatusPageComponent]
})
export class StatusPageModule { }
