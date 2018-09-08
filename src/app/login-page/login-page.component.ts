import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  profile: Profile;
  showLandingPage = true;
  @Output() registerPressed = new EventEmitter();



  ngOnInit() {
    this.profile = new Profile();
    const bodyElement = document.getElementsByTagName("body")[0];
    // bodyElement['style'] = 'margin: 0;';
  }

  hideLandingPage(){
    this.showLandingPage = false;
  }
  readyButtonPressed(){
    this.profileService.postProfile(this.profile);
    this.registerPressed.emit();
  }

}
