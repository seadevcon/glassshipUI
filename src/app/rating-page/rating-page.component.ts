import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Rating } from '../models/rating';
import { RatingService } from '../services/rating.service';
import { Ship } from '../models/ship';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.scss']
})
export class RatingPageComponent implements OnInit {

  list: any[];
  rating: Rating;
  showFinalPage = false;
  @Input() selectedShip: Ship;
  @Input() profile: Profile;
  @Output() backButtonPressed = new EventEmitter();
  @Output() backToHomeButtonPressed = new EventEmitter();
  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.list = [];
    this.list.push(1, 2, 3, 4, 5);
    this.rating = new Rating();
    this.rating.name = this.profile.name;
    this.rating.ship_name = this.selectedShip.name;
  }

  onBackButtonClicked() {
    this.backButtonPressed.emit();
  }
  onBackToHomeButtonClicked(){
    this.showFinalPage = false;
    this.backToHomeButtonPressed.emit();
  }
  beddingButtonClicked(rating: number){
    this.rating.bedding = rating;
  }
  foodButtonClicked(rating: number){
    this.rating.food = rating;
  }

  medicalButtonClicked(rating: number){
    this.rating.health = rating;
  }
  payButtonClicked(rating: number){
    this.rating.wage = rating;
  }
  happynessButtonClicked(rating: number) {
    this.rating.happiness = rating;
  }
  waterButtonClicked(rating: number) {
    this.rating.water = rating;
  }
  overallButtonClicked(rating: number) {
    this.rating.overall = rating;
  }

  sendButtonPressed(){
    this.showFinalPage = true;
    this.ratingService.postRating(this.rating);
  }


}
