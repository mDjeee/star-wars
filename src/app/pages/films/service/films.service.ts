import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilmsResponse} from "../models/films.model";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms(page: number = 1): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(`https://swapi.dev/api/films?page=${page}`);
  }
}
