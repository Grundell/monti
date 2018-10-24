import { Action } from '@ngrx/store';

export const SET_LIBS         = '[OBJ] GET LIBS';
export const SET_SELECTED     = '[OBJ] SET SELECTED';
export const REMOVE_SELECTED  = '[OBJ] REMOVE SELECTED';
export const SET_MYITEMS      = '[OBJ] SET MYITEMS';
export const SET_CURRENT_CITY = '[OBJ] SET CURRENT CITY';

export class SetLibs implements Action {
  readonly type = SET_LIBS;
  constructor(public items: any[]) { }
}

export class SelectedItem implements Action {
  readonly type = SET_SELECTED;
  constructor(public items: any) { }
}

export class RemoveSelected implements Action {
  readonly type = REMOVE_SELECTED;
}

export class CurrentCity implements Action {
  readonly type = SET_CURRENT_CITY;
  constructor(public item: any) { }
}

export class SetMyItems implements Action {
  readonly type = SET_MYITEMS;
  constructor(public item: any) { }
}

export type ObjActions = 
  SetLibs 
| SetMyItems
| RemoveSelected
| CurrentCity
| SelectedItem;
