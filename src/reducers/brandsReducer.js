import { FETCH_BRANDS_SUCCESS } from '../actions/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BRANDS_SUCCESS:
      const brands = {};
      payload.map(brand => (brands[brand.id] = brand));
      return {
        ...state,
        ...brands
      };
    default:
      return state;
  }
};
