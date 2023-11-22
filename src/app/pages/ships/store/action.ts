import { createAction, props } from "@ngrx/store";
import { ShipsResponse } from "../models/ships.model";

export const getShips            = createAction('[SHIPS] getShips', props<{ page: number }>());
export const getShipsSuccess     = createAction('[SHIPS] getShipsSuccess', props<{ ships: ShipsResponse }>());
export const getShipsFail        = createAction('[SHIPS] getShipsFail');
