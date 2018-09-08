import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ship } from '../models/ship';
import { Rating } from '../models/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  rateUrl = 'http://humarightsatsea.fatdataunicorn.com/rate';
  constructor(private http: HttpClient) { }

  postRating(rating: Rating){
    return this.http.post<Rating>(this.rateUrl, rating, this.httpOptions)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );;
  }
}
