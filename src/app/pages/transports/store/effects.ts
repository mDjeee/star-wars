import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { TransportsService } from "../services/transport.service";
import { getTransports, getTransportsFail, getTransportsSuccess } from "./action";

@Injectable()
export class TransportsEffects {
  constructor(
    private actions$: Actions,
    private transportsService: TransportsService,
  ) { }

  getTransports$ = createEffect(() => this.actions$.pipe(
    ofType(getTransports),
    switchMap(({page}) => {
      return this.transportsService.getTransports(page).pipe(
        map((transports) => {
            return getTransportsSuccess({ transports });
          },
          catchError(() => of(getTransportsFail()))
        )
      );
    })
  ));
}
