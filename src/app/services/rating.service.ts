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

  rateUrl = 'http://127.0.0.1:5000/rate';
  constructor(private http: HttpClient) { }

  postRating(rating: Rating){
    const jsonString = JSON.stringify(rating);
    let body = new FormData();
    return this.http.post<Rating>(this.rateUrl, jsonString, this.httpOptions)
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
