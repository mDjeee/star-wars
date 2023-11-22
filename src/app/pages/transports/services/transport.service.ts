import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { TransportsResponse } from '../models/transport.model';

@Injectable({
  providedIn: 'root'
})
export class TransportsService {

  constructor(private http: HttpClient) { }

  getTransports(page: number = 1): Observable<TransportsResponse> {
    return this.http.get<TransportsResponse>(`https://swapi.dev/api/vehicles?page=${page}`);
  }
}
