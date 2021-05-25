import { ActionReducerMap } from '@ngrx/store';
import * as fromStore from './store/app.sub-reducer';

export interface AppState {
  appStore: fromStore.storeState;
}

export const AppReducer: ActionReducerMap<AppState> = {
  appStore: fromStore.StoreReducer,
};
