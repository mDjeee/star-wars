import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getFilms } from "./actions";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { films, FilmsState } from "./reducer";

const selectFilms = createFeatureSelector<FilmsState>(films);
const films$ = createSelector(selectFilms, (state) => state);

@Injectable({
  providedIn: 'root'
})
export class FilmsFacade {
  constructor(private store: Store,) { }

  public films$ = this.store.pipe(select(films$));

  getPeople(page: number): void {
    this.store.dispatch(getFilms({ page }));
  }
}
