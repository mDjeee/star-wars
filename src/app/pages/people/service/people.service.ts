import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PeopleResponse} from "../models/people.model";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(page: number = 1): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(`https://swapi.dev/api/people?page=${page}`);
  }
}
