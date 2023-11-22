import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { nations, NationsState } from "./reducer";
import { getNations } from './action';

const selectNations = createFeatureSelector<NationsState>(nations);
const nations$ = createSelector(selectNations, (state) => state);

@Injectable({
  providedIn: 'root'
})
export class NationsFacade {
  constructor(private store: Store,) { }

  public nations$ = this.store.pipe(select(nations$));

  getNations(page: number): void {
    this.store.dispatch(getNations({ page }));
  }
}
