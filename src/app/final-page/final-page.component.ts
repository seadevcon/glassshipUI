import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.scss']
})
export class FinalPageComponent implements OnInit {

  @Output() backToHomePage = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  backToHomePageButtonClicked(){
    this.backToHomePage.emit();
  }

}
