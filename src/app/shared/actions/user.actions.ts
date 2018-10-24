import { Action } from '@ngrx/store';

export const SET_USER_CITIES    =  '[USR] GET CITIES';

export class SetUsrCities implements Action {
  readonly type =  SET_USER_CITIES;
  constructor(public payload: any[]) {}
}

export type UserActions = 
  SetUsrCities;