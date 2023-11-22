import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {getPlanets} from "./actions";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {planets, PlanetsState} from "./reducer";

const selectPlanets = createFeatureSelector<PlanetsState>(planets);
const planets$ = createSelector(selectPlanets, (state) => state);

@Injectable({
  providedIn: 'root'
})
export class PlanetsFacade {
  constructor(private store: Store,) { }

  public planets$ = this.store.pipe(select(planets$));

  getPlanets(page: number): void {
    this.store.dispatch(getPlanets({ page }));
  }
}
