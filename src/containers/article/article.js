import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import './article.css';
import { fetchArticleById } from '../../actions/actions';
import { getArticleById } from '../../selectors';
import BasketCart from '../../components/basketCart/basketCart';
import { addArticleToBasket } from '../../actions/actions';

class Article extends Component {
  componentDidMount() {
    this.props.fetchArticleById(this.props.match.params.id);
  }

  renderFields() {
    const { article } = this.props;
    const fields = [
      { frameColor: 'Frame Color' },
      { mainMaterial: 'Main Material' },
      { stacking: 'Stacking' },
      { weatherResistance: 'Weather Resistance' },
      { weightCapacity: 'Weight Capacity' },
      { size: 'Size' },
      { weight: 'Weight' },
      { originCountry: 'Origin Country' }
    ];

    const articleFields = fields.map(field => [
      field[Object.keys(field)[0]],
      article[Object.keys(field)[0]]
    ]);

    return articleFields.map(([field, value]) => (
      <div className='details' key={field}>
        <div className='details-title'>{field}:</div>
        <div className='details-info'>{value}</div>
      </div>
    ));
  }

  renderContent() {
    const { article } = this.props;
    return (
      <div className='thumbnail'>
        <div className='row'>
          <div className='col-md-6'>
            <img
              src={article.image}
              alt={article.name}
              className='img-thumbnail'
            />
          </div>
          <div className='col-md-6'>
            <h3 className='center'>Main features:</h3>
            {this.renderFields()}
          </div>
        </div>
        <div className='caption-full'>
          <h4 className='pull-right'>${article.price}</h4>
          <h4>{article.name}</h4>
          <p>{article.description}</p>
        </div>
      </div>
    );
  }
  renderSidebar() {
    const { article, addArticleToBasket } = this.props;
    return (
      <div>
        <h4 className='lead'>Quick Shop</h4>
        <BasketCart />
        <div className='form-group'>
          <h4>{article.name}</h4>
          <h3>${article.price}</h3>
        </div>
        <Link to='/' className='btn btn-info btn-block'>
          Back to store
        </Link>
        <button
          className='btn btn-success btn-block'
          onClick={() => addArticleToBasket(article.id)}
        >
          Add to cart
        </button>
      </div>
    );
  }

  render() {
    const { article } = this.props;
    return (
      <div className='container'>
        <div className='row pt20'>
          <div className='col-md-9'>{article && this.renderContent()}</div>
          <div className='col-md-3'>{article && this.renderSidebar()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    article: getArticleById(state, state.articlePage.id)
  };
};

const mapDispatchToProps = {
  fetchArticleById,
  addArticleToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
