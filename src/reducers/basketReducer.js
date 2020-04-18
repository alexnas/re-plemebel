import {
  ADD_ARTICLE_TO_BASKET,
  REMOVE_ARTICLE_FROM_BASKET,
  CLEAN_BASKET
} from '../actions/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ARTICLE_TO_BASKET:
      return [...state, ...[payload]];
    case REMOVE_ARTICLE_FROM_BASKET:
      return state.filter(id => id !== payload);
    case CLEAN_BASKET:
      return initialState;
    default:
      return state;
  }
};
