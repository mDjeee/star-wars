import { createReducer, on } from "@ngrx/store";
import { PlanetsResult } from "../models/planets.model";
import { getPlanets, getPlanetsFail, getPlanetsSuccess } from "./actions";

export const planets = 'planetsStore';

export interface PlanetsState {
  loading: boolean,
  count: number,
  next: string | null,
  previous: string | null,
  planets: PlanetsResult[];
}

export const initiaPlanetsPeopleState: PlanetsState = {
  loading: false,
  count: 0,
  next: null,
  previous: null,
  planets: []
};

export const PlanetsReducer = createReducer(
    initiaPlanetsPeopleState,

  on(getPlanetsSuccess, (state, { planets }) => ({
    ...state,
    count: planets.count,
    next: planets.next,
    previous: planets.previous,
    planets: planets.results,
    loading: false,
  })),

  on(getPlanets, getPlanetsFail, (state) => ({
    ...state,
    loading: true,
  })),
);
