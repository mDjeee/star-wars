import { ActionReducerMap } from "@ngrx/store";
import { people, PeopleReducer, PeopleState } from "../pages/people/store/reducer";
import { PeopleEffects } from "../pages/people/store/effects";
import { films, FilmsReducer, FilmsState } from "../pages/films/store/reducer";
import { FilmsEffects } from "../pages/films/store/effects";
import { nations, NationsReducer, NationsState } from "../pages/nations/store/reducer";
import { NationsEffects } from "../pages/nations/store/effects";

export interface State {
  [people]: PeopleState,
  [films]: FilmsState,
  [nations]: NationsState,
}

export const reducers: ActionReducerMap<State> = {
  [people]: PeopleReducer,
  [films]: FilmsReducer,
  [nations]: NationsReducer,
}

export const effects = [
  PeopleEffects,
  FilmsEffects,
  NationsEffects,
]
