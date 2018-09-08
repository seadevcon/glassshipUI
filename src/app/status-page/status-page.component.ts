import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Ship } from '../models/ship';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent implements OnInit {

  showRaitingView = false;
  showDistressView = false;
  @Input() selectedShip: Ship;
  @Input() profile: Profile;
  @Output() backToHomeEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  goBackToHomePage(){
    this.setShowDistressView(false);
    this.setShowRateView(false);
    this.backToHomeEmitter.emit();

  }

  setShowRateView(showView: boolean){
    this.showRaitingView = showView;
  }
  setShowDistressView(showView: boolean){
    this.showDistressView = showView;
  }
}
