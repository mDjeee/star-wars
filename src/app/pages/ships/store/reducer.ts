import { createReducer, on } from "@ngrx/store";
import { ShipsResult } from "../models/ships.model";
import { getShips, getShipsFail, getShipsSuccess } from "./action";

export const ships = 'shipsStore';

export interface ShipsState {
  loading: boolean,
  count: number,
  next: string | null,
  previous: string | null,
  ships: ShipsResult[];
}

export const initiaShipsPeopleState: ShipsState = {
  loading: false,
  count: 0,
  next: null,
  previous: null,
  ships: []
};

export const ShipsReducer = createReducer(
    initiaShipsPeopleState,

  on(getShipsSuccess, (state, { ships }) => ({
    ...state,
    count: ships.count,
    next: ships.next,
    previous: ships.previous,
    ships: ships.results,
    loading: false,
  })),

  on(getShips, getShipsFail, (state) => ({
    ...state,
    loading: true,
  })),
);
