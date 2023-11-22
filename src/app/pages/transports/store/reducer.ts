import { createReducer, on } from "@ngrx/store";
import { TransportsResult } from "../models/transport.model";
import { getTransports, getTransportsFail, getTransportsSuccess } from "./action";

export const transports = 'transportsStore';

export interface TransportsState {
  loading: boolean,
  count: number,
  next: string | null,
  previous: string | null,
  transports: TransportsResult[];
}

export const initiaTransportsPeopleState: TransportsState = {
  loading: false,
  count: 0,
  next: null,
  previous: null,
  transports: []
};

export const TransportsReducer = createReducer(
    initiaTransportsPeopleState,

  on(getTransportsSuccess, (state, { transports }) => ({
    ...state,
    count: transports.count,
    next: transports.next,
    previous: transports.previous,
    transports: transports.results,
    loading: false,
  })),

  on(getTransports, getTransportsFail, (state) => ({
    ...state,
    loading: true,
  })),
);
