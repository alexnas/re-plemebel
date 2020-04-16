import { FETCH_ARTICLE_BY_ID_SUCCESS } from '../actions/actionTypes';

const initialState = {
  id: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ARTICLE_BY_ID_SUCCESS:
      return {
        ...state,
        id: payload.id
      };
    default:
      return state;
  }
};
