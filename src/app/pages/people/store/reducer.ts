import { createReducer, on } from "@ngrx/store";
import { PeopleResult } from "../models/people.model";
import {getPeople, getPeopleFail, getPeopleSuccess} from "./actions";

export const people = 'peopleStore';

export interface PeopleState {
  loading: boolean,
  count: number,
  next: string | null,
  previous: string | null,
  people: PeopleResult[];
}

export const initialPeopleState: PeopleState = {
  loading: false,
  count: 0,
  next: null,
  previous: null,
  people: []
};

export const PeopleReducer = createReducer(
  initialPeopleState,

  on(getPeopleSuccess, (state, { people }) => ({
    ...state,
    count: people.count,
    next: people.next,
    previous: people.previous,
    people: people.results,
    loading: false,
  })),

  on(getPeople, getPeopleFail, (state) => ({
    ...state,
    loading: true,
  })),
);
