import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchArticleById } from '../../actions/actions';
import { getArticleById } from '../../selectors';
import './article.css';

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
    return <div>Sidbar</div>;
  }

  render() {
    const { article } = this.props;
    return (
      <div className='container'>
        <div className='row'>
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
  fetchArticleById
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
