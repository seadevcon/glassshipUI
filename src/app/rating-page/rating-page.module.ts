import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingPageComponent } from './rating-page.component';
import { RatingService } from '../services/rating.service';
import { FinalPageModule } from '../final-page/final-page.module';

@NgModule({
  imports: [
    CommonModule,
    FinalPageModule
  ],
  exports: [
    RatingPageComponent
  ],
  declarations: [RatingPageComponent],
  providers: [RatingService]
})
export class RatingPageModule { }
