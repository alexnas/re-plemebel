import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import './articles.css';
import MainLayout from '../mainLayout/mainLayout';
import {
  fetchArticles,
  loadMoreArticles,
  addArticleToBasket,
  fetchCategories
} from '../../actions/actions';
import { getArticles } from '../../selectors';

class Articles extends Component {
  componentDidMount() {
    this.props.fetchArticles();
    this.props.fetchCategories();
  }

  renderArticle = (article, index) => {
    const shortDescription = `${article.description.slice(0, 60)}...`;
    const { addArticleToBasket } = this.props;
    // TODO: insert real brand name, making state for brand
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
            <h6 className=''>Brand: {article.brand}</h6>
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
    articles: getArticles(state, ownProps)
  };
};

const mapDispatchToProps = {
  fetchArticles,
  loadMoreArticles,
  addArticleToBasket,
  fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
