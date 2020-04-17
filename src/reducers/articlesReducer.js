import {
  FETCH_ARTICLES_SUCCESS,
  LOAD_MORE_ARTICLES_SUCCESS,
  FETCH_ARTICLE_BY_ID_SUCCESS
} from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ARTICLES_SUCCESS:
      const newItems = {};
      payload.map(el => (newItems[el.id] = el));
      return {
        ...state,
        ...newItems
      };
    case LOAD_MORE_ARTICLES_SUCCESS:
      const moreItems = {};
      payload.map(el => (moreItems[el.id] = el));
      return {
        ...state,
        ...moreItems
      };
    case FETCH_ARTICLE_BY_ID_SUCCESS:
      const articleById = {};
      articleById[payload.id] = payload;
      return {
        ...state,
        ...articleById
      };

    default:
      return state;
  }
};
