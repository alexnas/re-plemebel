import {
  FETCH_ARTICLES_SUCCESS,
  LOAD_MORE_ARTICLES_SUCCESS,
  SEARCH_ARTICLE
} from '../actions/actionTypes';

const initialState = {
  ids: [],
  search: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        ids: payload.map(el => el.id)
      };
    case LOAD_MORE_ARTICLES_SUCCESS:
      return {
        ...state,
        ids: [...state.ids, ...payload.map(el => el.id)]
      };
    case SEARCH_ARTICLE:
      return {
        ...state,
        search: payload
      };
    default:
      return state;
  }
};
