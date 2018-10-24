import { Action } from '@ngrx/store';

export const START_LOADING      = '[UI] Start Loading';
export const STOP_LOADING       = '[UI] Stop Loading';
export const ADDED_CITY_LOADING = '[UI] Start city Loading';
export const ADDED_CITY_STOP    = '[UI] Stop city Loading';

export class StartLoading implements Action {
  readonly type = START_LOADING;
}

export class StopLoading implements Action {
  readonly type = STOP_LOADING;
}

export class StartCityLoading implements Action {
  readonly type = ADDED_CITY_LOADING;
}


export class StopCityLoading implements Action {
  readonly type = ADDED_CITY_STOP;
}

export type UIActions = 
  StartLoading 
| StopLoading
| StartCityLoading
| StopCityLoading;
