import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LandingPageComponent
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
