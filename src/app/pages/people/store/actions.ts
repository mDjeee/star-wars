import { createAction, props } from "@ngrx/store";
import { PeopleResponse } from "../models/people.model";

export const getPeople            = createAction('[PEOPLE] getPeople', props<{ page: number }>());
export const getPeopleSuccess     = createAction('[PEOPLE] getPeopleSuccess', props<{ people: PeopleResponse }>());
export const getPeopleFail        = createAction('[PEOPLE] getPeopleFail');
