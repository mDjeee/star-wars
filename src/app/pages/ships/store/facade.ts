import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ships, ShipsState } from './reducer';
import { getShips } from './action';

const selectShips = createFeatureSelector<ShipsState>(ships);
const ships$ = createSelector(selectShips, (state) => state);

@Injectable({
  providedIn: 'root'
})
export class ShipsFacade {
  constructor(private store: Store,) { }

  public ships$ = this.store.pipe(select(ships$));

  getShips(page: number): void {
    this.store.dispatch(getShips({ page }));
  }
}
