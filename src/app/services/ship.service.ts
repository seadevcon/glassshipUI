import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ship } from '../models/ship';

@Injectable({
  providedIn: 'root'
})
export class ShipService {
  shipUrl = 'http://humarightsatsea.fatdataunicorn.com/get_ships_names';
  constructor(private http: HttpClient) { }

  getShips(): Observable<any> {
    return this.http.get<any>(this.shipUrl);
  }
}
