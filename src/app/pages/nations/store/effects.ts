import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { NationsService } from "../service/nations.service";
import { getNations, getNationsFail, getNationsSuccess } from "./action";

@Injectable()
export class NationsEffects {
  constructor(
    private actions$: Actions,
    private nationsService: NationsService,
  ) { }

  getPeople$ = createEffect(() => this.actions$.pipe(
    ofType(getNations),
    switchMap(({page}) => {
      return this.nationsService.getNations(page).pipe(
        map((nations) => {
            return getNationsSuccess({ nations });
          },
          catchError(() => of(getNationsFail()))
        )
      );
    })
  ));
}
