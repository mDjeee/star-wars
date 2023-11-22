import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlanetsResponse} from "../models/planets.model";

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets(page: number = 1): Observable<PlanetsResponse> {
    return this.http.get<PlanetsResponse>(`https://swapi.dev/api/planets?page=${page}`);
  }
}
