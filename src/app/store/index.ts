import { ActionReducerMap } from "@ngrx/store";
import { people, PeopleReducer, PeopleState } from "../pages/people/store/reducer";
import { PeopleEffects } from "../pages/people/store/effects";
import { films, FilmsReducer, FilmsState } from "../pages/films/store/reducer";
import { FilmsEffects } from "../pages/films/store/effects";
import { nations, NationsReducer, NationsState } from "../pages/nations/store/reducer";
import { NationsEffects } from "../pages/nations/store/effects";
import { planets, PlanetsReducer, PlanetsState } from "../pages/planets/store/reducer";
import { PlanetsEffects } from "../pages/planets/store/effect";
import { ships, ShipsReducer, ShipsState } from "../pages/ships/store/reducer";
import { ShipsEffects } from "../pages/ships/store/effects";
import { transports, TransportsReducer, TransportsState } from "../pages/transports/store/reducer";
import { TransportsEffects } from "../pages/transports/store/effects";

export interface State {
  [people]: PeopleState,
  [films]: FilmsState,
  [nations]: NationsState,
  [planets]: PlanetsState,
  [ships]: ShipsState,
  [transports]: TransportsState,
}

export const reducers: ActionReducerMap<State> = {
  [people]: PeopleReducer,
  [films]: FilmsReducer,
  [nations]: NationsReducer,
  [planets]: PlanetsReducer,
  [ships]: ShipsReducer,
  [transports]: TransportsReducer,
}

export const effects = [
  PeopleEffects,
  FilmsEffects,
  NationsEffects,
  PlanetsEffects,
  ShipsEffects,
  TransportsEffects,
]
