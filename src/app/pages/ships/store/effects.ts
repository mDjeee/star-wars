import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ShipsService } from "../services/ships.service";
import { getShips, getShipsFail, getShipsSuccess } from "./action";

@Injectable()
export class ShipsEffects {
  constructor(
    private actions$: Actions,
    private shipsService: ShipsService,
  ) { }

  getPlanets$ = createEffect(() => this.actions$.pipe(
    ofType(getShips),
    switchMap(({page}) => {
      return this.shipsService.getShips(page).pipe(
        map((ships) => {
            return getShipsSuccess({ ships });
          },
          catchError(() => of(getShipsFail()))
        )
      );
    })
  ));
}
