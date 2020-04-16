import articles from './mockArticles';

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
