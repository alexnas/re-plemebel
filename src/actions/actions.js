import {
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  LOAD_MORE_ARTICLES_START,
  LOAD_MORE_ARTICLES_SUCCESS,
  LOAD_MORE_ARTICLES_FAILURE,
  FETCH_ARTICLE_BY_ID_START,
  FETCH_ARTICLE_BY_ID_SUCCESS,
  FETCH_ARTICLE_BY_ID_FAILURE
} from './actionTypes';
import {
  fetchArticles as fetchArticlesApi,
  loadMorePhones as loadMorePhonesApi,
  fetchArticle as fetchArticleApi
} from '../api/articlesMockApi';
import { getRenderedArticlesLength } from '../selectors';

export const fetchArticles = () => async dispatch => {
  dispatch({
    type: FETCH_ARTICLES_START
  });

  try {
    const articles = await fetchArticlesApi();
    dispatch({
      type: FETCH_ARTICLES_SUCCESS,
      payload: articles
    });
  } catch (err) {
    dispatch({
      type: FETCH_ARTICLES_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const fetchArticleById = id => async dispatch => {
  dispatch({
    type: FETCH_ARTICLE_BY_ID_START
  });

  try {
    const article = await fetchArticleApi(id);
    dispatch({
      type: FETCH_ARTICLE_BY_ID_SUCCESS,
      payload: article
    });
  } catch (err) {
    dispatch({
      type: FETCH_ARTICLE_BY_ID_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const loadMoreArticles = () => async (dispatch, getState) => {
  const offset = getRenderedArticlesLength(getState());
  dispatch({
    type: LOAD_MORE_ARTICLES_START
  });

  try {
    const articles = await loadMorePhonesApi(offset);
    dispatch({
      type: LOAD_MORE_ARTICLES_SUCCESS,
      payload: articles
    });
  } catch (err) {
    dispatch({
      type: LOAD_MORE_ARTICLES_FAILURE,
      payload: err,
      error: true
    });
  }
};
