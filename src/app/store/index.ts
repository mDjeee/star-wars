import { ActionReducerMap } from "@ngrx/store";
import { people, PeopleReducer, PeopleState } from "../pages/people/store/reducer";
import { PeopleEffects } from "../pages/people/store/effects";
import { films, FilmsReducer, FilmsState } from "../pages/films/store/reducer";
import { FilmsEffects } from "../pages/films/store/effects";
import { nations, NationsReducer, NationsState } from "../pages/nations/store/reducer";
import { NationsEffects } from "../pages/nations/store/effects";
import { planets, PlanetsReducer, PlanetsState } from "../pages/planets/store/reducer";
import { PlanetsEffects } from "../pages/planets/store/effect";

export interface State {
  [people]: PeopleState,
  [films]: FilmsState,
  [nations]: NationsState,
  [planets]: PlanetsState,
}

export const reducers: ActionReducerMap<State> = {
  [people]: PeopleReducer,
  [films]: FilmsReducer,
  [nations]: NationsReducer,
  [planets]: PlanetsReducer,
}

export const effects = [
  PeopleEffects,
  FilmsEffects,
  NationsEffects,
  PlanetsEffects,
]
