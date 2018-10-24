import { Action } from '@ngrx/store';

import { UIActions, START_LOADING, STOP_LOADING } from '../actions/ui.actions';

export interface State {
  isLoading: boolean;
  darkMode: boolean;
}

const initialState: State = {
  isLoading: false,
  darkMode: true,
};

export function uiReducer(state = initialState, action: UIActions) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
 
    default: {
      return state;
    }
  }
}

export const getIsLoading = (state: State) => state.isLoading;
