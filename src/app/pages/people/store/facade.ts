import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {getPeople} from "./actions";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {people, PeopleState} from "./reducer";

const selectPeople = createFeatureSelector<PeopleState>(people);
const people$ = createSelector(selectPeople, (state) => state);

@Injectable({
  providedIn: 'root'
})
export class PeopleFacade {
  constructor(private store: Store,) { }

  public people$ = this.store.pipe(select(people$));

  getPeople(page: number): void {
    this.store.dispatch(getPeople({ page }));
  }
}
