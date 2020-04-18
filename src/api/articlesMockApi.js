import articles from './mockArticles';
import categories from './mockCategories';
import brands from './mockBrands';

export const fetchArticles = async () => {
  return new Promise((resolve, reject) => {
    resolve(articles);
  });
};

export const loadMorePhones = async ({ offset }) => {
  return new Promise((resolve, reject) => {
    resolve(articles);
  });
};

export const fetchArticle = async id => {
  return new Promise((resolve, reject) => {
    const article = articles.find(article => article.id === id);
    resolve(article);
  });
};

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    resolve(categories);
  });
};

export const fetchBrands = async () => {
  return new Promise((resolve, reject) => {
    resolve(brands);
  });
};
