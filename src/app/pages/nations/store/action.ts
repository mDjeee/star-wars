import { createAction, props } from "@ngrx/store";
import { NationsResponse } from "../models/nations.model";

export const getNations            = createAction('[NATIONS] getNations', props<{ page: number }>());
export const getNationsSuccess     = createAction('[NATIONS] getNationsSuccess', props<{ nations: NationsResponse }>());
export const getNationsFail        = createAction('[NATIONS] getNationsFail');
