import { Component, OnInit, ElementRef } from '@angular/core';
import { Ship } from '../models/ship';
import { shimContentAttribute } from '@angular/platform-browser/src/dom/dom_renderer';
import { ShipService } from '../services/ship.service';
import { templateJitUrl } from '@angular/compiler';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private shipService: ShipService) { }
  allShips: Ship[];
  profile: Profile;
  ships;
  selectedShip: Ship;
  signedIn = false;
  hasSelectedShip = false;

  ngOnInit() {
    this.allShips = [];

    this.shipService.getShips().subscribe((incommingShips) => {
      this.allShips = [];
      for (const ship of incommingShips.name) {
        const newShip = new Ship();
        newShip.name = ship;
        this.allShips.push(newShip);
        this.ships = [...this.allShips];
      }
    })
    }
    backToHome(){
      this.hasSelectedShip = false;
      this.selectedShip = undefined;
    }

    filter(searchInput) {
      const searchString = searchInput.value;
      const tempList = [];
      for (const ship of this.allShips) {
        if(ship.name.toLowerCase().includes(searchString)) {
          tempList.push(ship);
        }
      }
      this.ships = [...tempList];

    }

    setSelectedShip(ship: Ship){
      this.selectedShip = ship;
      this.hasSelectedShip = true;
    }
  hasSignedIn(profile: Profile) {
    this.profile = profile;
    this.signedIn = true;
  }
}
