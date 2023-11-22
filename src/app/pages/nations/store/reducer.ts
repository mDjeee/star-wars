import { createReducer, on } from "@ngrx/store";
import { NationsResult } from "../models/nations.model";
import { getNations, getNationsFail, getNationsSuccess } from "./action";

export const nations = 'nationsStore';

export interface NationsState {
  loading: boolean,
  count: number,
  next: string | null,
  previous: string | null,
  nations: NationsResult[];
}

export const initialNationsState: NationsState = {
  loading: false,
  count: 0,
  next: null,
  previous: null,
  nations: []
};

export const NationsReducer = createReducer(
    initialNationsState,

  on(getNationsSuccess, (state, { nations }) => ({
    ...state,
    count: nations.count,
    next: nations.next,
    previous: nations.previous,
    nations: nations.results,
    loading: false,
  })),

  on(getNations, getNationsFail, (state) => ({
    ...state,
    loading: true,
  })),
);
