import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { PlanetsService } from "../services/planets.service";
import { getPlanets, getPlanetsFail, getPlanetsSuccess } from "./actions";

@Injectable()
export class PlanetsEffects {
  constructor(
    private actions$: Actions,
    private planetsService: PlanetsService,
  ) { }

  getPlanets$ = createEffect(() => this.actions$.pipe(
    ofType(getPlanets),
    switchMap(({page}) => {
      return this.planetsService.getPlanets(page).pipe(
        map((planets) => {
            return getPlanetsSuccess({ planets });
          },
          catchError(() => of(getPlanetsFail()))
        )
      );
    })
  ));
}
