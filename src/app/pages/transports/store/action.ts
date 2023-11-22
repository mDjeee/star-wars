import { createAction, props } from "@ngrx/store";
import { TransportsResponse } from "../models/transport.model";

export const getTransports            = createAction('[TRANSPORTS] getTransports', props<{ page: number }>());
export const getTransportsSuccess     = createAction('[TRANSPORTS] getTransportsSuccess', props<{ transports: TransportsResponse }>());
export const getTransportsFail        = createAction('[TRANSPORTS] getTransportsFail');
