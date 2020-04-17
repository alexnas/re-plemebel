import { FETCH_CATEGORIES_SUCCESS } from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      const newCat = {};
      payload.map(cat => (newCat[cat.id] = cat));
      return {
        ...state,
        ...newCat
      };
    default:
      return state;
  }
};
