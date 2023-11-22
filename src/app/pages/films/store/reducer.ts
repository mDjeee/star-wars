import { createReducer, on } from "@ngrx/store";
import { FilmsResult } from "../models/films.model";
import {getFilms, getFilmsFail, getFilmsSuccess} from "./actions";

export const films = 'filmsStore';

export interface FilmsState {
  loading: boolean,
  count: number,
  next: string | null,
  previous: string | null,
  films: FilmsResult[];
}

export const initialFilmsState: FilmsState = {
  loading: false,
  count: 0,
  next: null,
  previous: null,
  films: []
};

export const FilmsReducer = createReducer(
  initialFilmsState,

  on(getFilmsSuccess, (state, { films }) => ({
    ...state,
    count: films.count,
    next: films.next,
    previous: films.previous,
    films: films.results,
    loading: false,
  })),

  on(getFilms, getFilmsFail, (state) => ({
    ...state,
    loading: true,
  })),
);
