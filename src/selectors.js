export const getArticleById = (state, id) => state.articles[id];

export const getArticles = state =>
  state.articlesPage.ids.map(id => getArticleById(state, id));

export const getRenderedArticlesLength = state => state.articlesPage.ids.length;
