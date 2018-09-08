import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-distress-feedback-page',
  templateUrl: './distress-feedback-page.component.html',
  styleUrls: ['./distress-feedback-page.component.scss']
})
export class DistressFeedbackPageComponent implements OnInit {

  @Output() backButtonPressed = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  backButtonClicked(){
    this.backButtonPressed.emit();
  }

}
