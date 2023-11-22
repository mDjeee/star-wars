import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ShipsResponse } from '../models/ships.model';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(private http: HttpClient) { }

  getShips(page: number = 1): Observable<ShipsResponse> {
    return this.http.get<ShipsResponse>(`https://swapi.dev/api/starships?page=${page}`);
  }
}
