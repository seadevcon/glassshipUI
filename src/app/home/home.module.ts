import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ShipService } from '../services/ship.service';
import { LoginPageModule } from '../login-page/login-page.module';
import { StatusPageModule } from '../status-page/status-page.module';

@NgModule({
  imports: [
    CommonModule,
    LoginPageModule,
    StatusPageModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent],
  providers: [ShipService]
})
export class HomeModule { }
