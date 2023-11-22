import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NationsResponse} from "../models/nations.model";

@Injectable({
  providedIn: 'root'
})
export class NationsService {

  constructor(private http: HttpClient) { }

  getNations(page: number = 1): Observable<NationsResponse> {
    return this.http.get<NationsResponse>(`https://swapi.dev/api/species?page=${page}`);
  }
}
