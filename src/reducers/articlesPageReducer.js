import { FETCH_ARTICLES_SUCCESS } from '../actions/actionTypes';
import { LOAD_MORE_ARTICLES_SUCCESS } from '../actions/actionTypes';

const initialState = {
  ids: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        ids: [...state.ids, ...payload.map(el => el.id)]
      };

    case LOAD_MORE_ARTICLES_SUCCESS:
      return {
        ...state,
        ids: [...state.ids, ...payload.map(el => el.id)]
      };
    default:
      return state;
  }
};
