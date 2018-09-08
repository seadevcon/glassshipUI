import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipviewComponent } from './shipview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ShipviewComponent
  ],

  declarations: [ShipviewComponent]
})
export class ShipviewModule { }
