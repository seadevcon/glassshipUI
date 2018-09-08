import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Ship } from '../models/ship';
import { Distress } from '../models/distress';
import { Profile } from '../models/profile';
import { DistressService } from '../services/distress.service';

@Component({
  selector: 'app-distress-page',
  templateUrl: './distress-page.component.html',
  styleUrls: ['./distress-page.component.scss']
})
export class DistressPageComponent implements OnInit {

  @Input() selectedShip: Ship;
  @Input() profile: Profile;
  @Output() backButtonPressed = new EventEmitter();
  showDistressPage = false;
  distress = new Distress();
  constructor(private distressService: DistressService) { }

  ngOnInit() {
    this.distress.ship_name = this.selectedShip.name;
    this.distress.name = this.profile.name;

  }

  onBackButtonClicked() {
    this.showDistressPage = false;
    this.backButtonPressed.emit();
  }
  distressButtonClicked(distressID: number){
    switch(distressID){
      case 0: // Injury
      this.distress.distress_type = 'injury';
        break;
      case 1: // Abandonment
      this.distress.distress_type = 'abandon';
        break;

      case 2: // Missing
      this.distress.distress_type = 'missing person';
        break;
    }
    this.showDistressPage = true;
    this.distressService.postDistress(this.distress);
  }
}
