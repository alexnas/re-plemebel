export const getArticleById = (state, id) => state.articles[id];

export const getArticles = state => {
  return state.articlesPage.ids
    .map(id => getArticleById(state, id))
    .filter(article => article.name.includes(state.articlesPage.search));
};

export const getRenderedArticlesLength = state => state.articlesPage.ids.length;

export const getTotalBasketCount = state => state.basket.length;

export const getTotalBasketPrice = state => {
  const totalPrice = state.basket.reduce((sum, id) => {
    return (sum += +getArticleById(state, id).price);
  }, 0);
  return totalPrice.toFixed(2);
};
