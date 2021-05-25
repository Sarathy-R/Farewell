import { Action } from '@ngrx/store';

export const GET_ALL_DETAILS = '[Store] GET_ALL_DETAILS';

export class getAllDetails implements Action {
  readonly type = GET_ALL_DETAILS;
}
export type availableActions = getAllDetails;
