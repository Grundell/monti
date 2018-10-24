import { Action } from '@ngrx/store';

import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_AUTH_ID } from './auth.actions';

export interface State {
  isAuthenticated: boolean;
  authID: string;
}

const initialState: State = {
  isAuthenticated: false,
  authID: ''
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true
      };
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        isAuthenticated: false
      };
    case SET_AUTH_ID:
      return {
        ...state,
        authID: action.payload
      }
    default: {
      return state;
    }
  }
}

export const getIsAuth = (state: State) => state.isAuthenticated;
export const getUID    = (state: State) => state.authID;
