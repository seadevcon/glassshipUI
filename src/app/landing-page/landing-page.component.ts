import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  @Output() landingPageButtonPressed = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  landingPageClicked(){
    this.landingPageButtonPressed.emit();
  }
}
