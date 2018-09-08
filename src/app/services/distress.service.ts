import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../models/profile';
import { Distress } from '../models/distress';

@Injectable({
  providedIn: 'root'
})
export class DistressService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  shipUrl = 'http://humarightsatsea.fatdataunicorn.com/add_distress';
  constructor(private http: HttpClient) { }

  postDistress(distress: Distress){
    return this.http.post<Distress>(this.shipUrl, distress, this.httpOptions)
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
