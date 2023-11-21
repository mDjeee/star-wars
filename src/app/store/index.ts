import { ActionReducerMap } from "@ngrx/store";
import { people, PeopleReducer, PeopleState } from "../pages/people/store/reducer";
import { PeopleEffects } from "../pages/people/store/effects";

export interface State {
  [people]: PeopleState,
}

export const reducers: ActionReducerMap<State> = {
  [people]: PeopleReducer
}

export const effects = [
  PeopleEffects,
]
