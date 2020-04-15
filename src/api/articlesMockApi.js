import articles from './mockArticles';

export const fetchArticles = async () => {
  return new Promise((resolve, reject) => {
    resolve(articles);
  });
};
