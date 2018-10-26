import { Action } from '@ngrx/store';

import { ObjActions, 
  SET_LIBS, 
  SET_SELECTED,
  REMOVE_SELECTED, 
  SET_MYITEMS,
  SET_CURRENT_CITY} from '../actions/object.actions';

export interface State {
  searchItems: any[];
  selectedItem: any | null;
  myItems: any[];
  currentCity: any;
}

const initialState: State = {
  searchItems: [],
  selectedItem: null,
  myItems: [],
  currentCity: null
};

export function objectReducer(state = initialState, action: ObjActions) {
  switch (action.type) {
    case SET_LIBS:
      return {
        ...state,
        searchItems: action.items
      };
    case SET_SELECTED:
      return {
        ...state,
        selectedItem: action.items
      };
    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.item
      };
    case SET_MYITEMS:
      return {
        ...state,
        myItems: action.item
      };
    case REMOVE_SELECTED:
      return {
        ...state,
        currentCity: null
      }
    default: {
      return state;
    }
  }
}

export const getItems =  (state: State ) => state.searchItems;
export const getSelectedItem =  (state: State ) => state.selectedItem;
export const getMyItems = (state: State ) => state.myItems;
export const getCurrentCity = (state: State ) => state.currentCity;