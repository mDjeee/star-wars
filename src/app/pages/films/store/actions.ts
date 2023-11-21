import { createAction, props } from "@ngrx/store";
import { FilmsResponse } from "../models/films.model";

export const getFilms            = createAction('[FILMS] getFilms', props<{ page: number }>());
export const getFilmsSuccess     = createAction('[FILMS] getFilmsSuccess', props<{ people: FilmsResponse }>());
export const getFilmsFail        = createAction('[FILMS] getFilmsFail');
