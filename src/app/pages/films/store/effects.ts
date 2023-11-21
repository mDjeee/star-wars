import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import {getFilms, getFilmsFail, getFilmsSuccess} from "./actions";
import {FilmsService} from "../service/films.service";

@Injectable()
export class PeopleEffects {
  constructor(
    private actions$: Actions,
    private filmsService: FilmsService,
  ) { }

  getPeople$ = createEffect(() => this.actions$.pipe(
    ofType(getFilms),
    switchMap(({page}) => {
      return this.filmsService.getFilms(page).pipe(
        map((people) => {
            return getFilmsSuccess({ films });
          },
          catchError(() => of(getFilmsFail()))
        )
      );
    })
  ));
}
