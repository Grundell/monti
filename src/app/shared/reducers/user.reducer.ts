import { Action } from '@ngrx/store';
import {UserActions, SET_USER_CITIES} from '../actions/user.actions';


export interface State {
  cities: any[];
}

const initialState: State = {
  cities: [],
}

export function userReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case SET_USER_CITIES:
    console.log(action.payload)
      return {
        ...state,
        cities: action.payload
      }
      default: {
        return state;
      }
    }     
}

export const getCities  =  (state: State ) =>  state.cities;