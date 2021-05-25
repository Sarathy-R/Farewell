import * as appActions from './app.actions';
import { wishFormat } from '../models/wish.model';
import * as details from './../../assets/details.json';
export interface storeState {
  wishCollections: wishFormat[];
  peopleQuestion: any;
  about: any;
  extra_details:any
}

const initialState: storeState = {
  wishCollections: [],
  peopleQuestion: [],
  about: {},
  extra_details:{}
};

export function StoreReducer(
  state: storeState = initialState,
  action: appActions.availableActions
) {
  switch (action.type) {
    case appActions.GET_ALL_DETAILS:
      let dataWishes: wishFormat[] = [];
      details.wishes.forEach((e) => {
        dataWishes.push(new wishFormat(e.description, e.author));
      });
      let qns = [...details.questions];
      return {
        ...state,
        about: details.about,
        extra_details: details.details,
        wishCollections: dataWishes,
        peopleQuestion: qns,
      };

    default:
      return { ...state };
  }
}
