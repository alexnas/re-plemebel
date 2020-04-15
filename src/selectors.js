import * as R from 'ramda';

// export const getArticleById = (state, id) => {
//   return Object.values(state.articles).filter(
//     article => article.id === String(id)
//   );
// };
export const getArticleById = (state, id) => R.prop(id, state.articles);

export const getArticles = state => {
  const articles = R.map(
    id => getArticleById(state, id),
    state.articlesPage.ids
  );
  return articles;
};
