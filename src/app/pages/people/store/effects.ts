import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import {PeopleService} from "../service/people.service";
import {getPeople, getPeopleFail, getPeopleSuccess} from "./actions";

@Injectable()
export class PeopleEffects {
  constructor(
    private actions$: Actions,
    private peopleService: PeopleService,
  ) { }

  getPeople$ = createEffect(() => this.actions$.pipe(
    ofType(getPeople),
    switchMap(({page}) => {
      return this.peopleService.getPeople(page).pipe(
        map((people) => {
            return getPeopleSuccess({ people });
          },
          catchError(() => of(getPeopleFail()))
        )
      );
    })
  ));
}
