import {
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  LOAD_MORE_ARTICLES_START,
  LOAD_MORE_ARTICLES_SUCCESS,
  LOAD_MORE_ARTICLES_FAILURE,
  FETCH_ARTICLE_BY_ID_START,
  FETCH_ARTICLE_BY_ID_SUCCESS,
  FETCH_ARTICLE_BY_ID_FAILURE,
  ADD_ARTICLE_TO_BASKET,
  SEARCH_ARTICLE,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  REMOVE_ARTICLE_FROM_BASKET,
  CLEAN_BASKET,
  BASKET_CHECKOUT,
  FETCH_BRANDS_START,
  FETCH_BRANDS_SUCCESS,
  FETCH_BRANDS_FAILURE
} from './actionTypes';
import {
  fetchArticles as fetchArticlesApi,
  loadMorePhones as loadMorePhonesApi,
  fetchArticle as fetchArticleApi,
  fetchCategories as fetchCategoriesApi,
  fetchBrands as fetchBrandsApi
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

export const addArticleToBasket = id => dispatch => {
  dispatch({
    type: ADD_ARTICLE_TO_BASKET,
    payload: id
  });
};

export const searchArticle = text => dispatch => {
  dispatch({
    type: SEARCH_ARTICLE,
    payload: text
  });
};

export const fetchCategories = () => async dispatch => {
  dispatch({
    type: FETCH_CATEGORIES_START
  });

  try {
    const categories = await fetchCategoriesApi();
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories
    });
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const removeArticleFromBasket = id => dispatch => {
  dispatch({
    type: REMOVE_ARTICLE_FROM_BASKET,
    payload: id
  });
};

export const cleanBasket = () => dispatch => {
  dispatch({
    type: CLEAN_BASKET
  });
};

export const basketCheckout = articles => dispatch => {
  alert(JSON.stringify(articles)); // temporary illustrative data output
  dispatch({ type: BASKET_CHECKOUT, payload: articles });
};

export const fetchBrands = () => async dispatch => {
  dispatch({
    type: FETCH_BRANDS_START
  });

  try {
    const brands = await fetchBrandsApi();
    dispatch({
      type: FETCH_BRANDS_SUCCESS,
      payload: brands
    });
  } catch (err) {
    dispatch({
      type: FETCH_BRANDS_FAILURE,
      payload: err,
      error: true
    });
  }
};
