import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MainLayout from '../mainLayout/mainLayout';
import {
  fetchArticles,
  loadMoreArticles,
  addArticleToBasket,
  fetchCategories,
  fetchBrands
} from '../../actions/actions';
import { getArticles, getBrands } from '../../selectors';

class Articles extends Component {
  componentDidMount() {
    this.props.fetchArticles();
    this.props.fetchCategories();
    this.props.fetchBrands();
  }

  renderArticle = (article, index) => {
    const { brands, addArticleToBasket } = this.props;
    const shortDescription = `${article.description.slice(0, 60)}...`;
    const brand = brands.filter(brand => brand.id === article.brand)[0];

    return (
      <div
        className='col col-12 col-sm-6 col-md-4  col-lg-3 article-list'
        key={index}
      >
        <div className='thumbnail'>
          <img
            src={article.image}
            alt={article.name}
            className='img-thumbnail'
          />
          <div className='caption'>
            <h6>
              <Link to={`/articles/${article.id}`}>{article.name}</Link>
            </h6>
            <h6 className='brand'>
              <span>Brand: </span> {brand && brand.name}
            </h6>
            <p className='short-description'>{shortDescription}</p>
            <div>
              <h5 className='article-price'>${article.price}</h5>
            </div>
            <p className='itemButton'>
              <button
                onClick={() => addArticleToBasket(article.id)}
                className='btn btn-success'
              >
                Buy now!
              </button>
              <Link
                to={`/articles/${article.id}`}
                className='btn btn-outline-secondary'
              >
                More info
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { articles, loadMoreArticles } = this.props;
    return (
      <>
        <MainLayout>
          <h1>Welcome to the World of Rattan</h1>
          <div className='row'>
            {articles.map((article, index) =>
              this.renderArticle(article, index)
            )}
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div
                onClick={loadMoreArticles}
                className='btn btn-primary pull-right'
              >
                Load More
              </div>
            </div>
          </div>
        </MainLayout>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    articles: getArticles(state, ownProps),
    brands: getBrands(state)
  };
};

const mapDispatchToProps = {
  fetchArticles,
  loadMoreArticles,
  addArticleToBasket,
  fetchCategories,
  fetchBrands
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
