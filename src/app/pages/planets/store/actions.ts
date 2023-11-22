import { createAction, props } from "@ngrx/store";
import { PlanetsResponse } from "../models/planets.model";

export const getPlanets           = createAction('[PLANETS] getPlanets', props<{ page: number }>());
export const getPlanetsSuccess     = createAction('[PLANETS] getPlanetsSuccess', props<{ planets: PlanetsResponse }>());
export const getPlanetsFail        = createAction('[PLANETS] getPlanetsFail');
