import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { transports, TransportsState } from './reducer';
import { getTransports } from './action';

const selectTransports = createFeatureSelector<TransportsState>(transports);
const transports$ = createSelector(selectTransports, (state) => state);

@Injectable({
  providedIn: 'root'
})
export class TransportsFacade {
  constructor(private store: Store,) { }

  public transports$ = this.store.pipe(select(transports$));

  getTransports(page: number): void {
    this.store.dispatch(getTransports({ page }));
  }
}
