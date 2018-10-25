
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUi from './shared/reducers/ui.reducer';
import * as fromAuth from './auth/auth.reducer';
import * as fromObject from './shared/reducers/object.reducer';
import * as fromUser from './shared/reducers/user.reducer';
import { RouterStateUrl } from './shared/reducers/router.reducer';
import * as fromRouter from '@ngrx/router-store';

export interface State {
  ui: fromUi.State;
  auth: fromAuth.State;
  weather: fromObject.State;
  user: fromUser.State;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiReducer,
  auth: fromAuth.authReducer,
  weather: fromObject.objectReducer,
  user: fromUser.userReducer,
  router: fromRouter.routerReducer
};

export const getUiState = createFeatureSelector<fromUi.State>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuth);
export const getUID = createSelector(getAuthState, fromAuth.getUID);

export const getWeatherState = createFeatureSelector<fromObject.State>('weather');
export const weatherCities = createSelector(getWeatherState, fromObject.getItems );

export const getSelected = createSelector(getWeatherState, fromObject.getSelectedItem);
export const getMyItems = createSelector(getWeatherState, fromObject.getMyItems);
export const getCurrent = createSelector(getWeatherState, fromObject.getCurrentCity);

export const getUserState = createFeatureSelector<fromUser.State>('user');
export const getCities = createSelector(getUserState, fromUser.getCities);

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('router');
