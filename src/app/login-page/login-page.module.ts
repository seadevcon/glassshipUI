import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { ProfileService } from '../services/profile.service';
import { LandingPageModule } from '../landing-page/landing-page.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LandingPageModule
  ],
  exports: [
    LoginPageComponent
  ],
  declarations: [LoginPageComponent],
  providers: [ProfileService]
})
export class LoginPageModule { }
