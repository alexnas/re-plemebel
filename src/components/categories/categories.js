import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import classnames from 'classnames';

import { getCategories, getActiveCategoryId } from '../../selectors';

const Categories = ({ categories, activeCategoryId }) => {
  const renderCategory = (category, index) => {
    const linkClass = classnames({
      'list-group-item': true,
      'list-group-item-light': true,
      'list-group-item-action': true,
      'cat-list': true,
      active: category.id === activeCategoryId
    });

    return (
      <Link to={`/categories/${category.id}`} className={linkClass} key={index}>
        {category.name}
      </Link>
    );
  };

  const renderAllCategory = () => {
    const linkClass = classnames({
      'list-group-item': true,
      'list-group-item-light': true,
      'list-group-item-action': true,
      'cat-list': true,
      active: !activeCategoryId
    });

    return (
      <Link to='/' className={linkClass}>
        All
      </Link>
    );
  };

  return (
    <div className='well'>
      <h4 className='lead'>Categories</h4>
      <div className='list-group'>{renderAllCategory()}</div>
      <div className='list-group'>
        {categories.map((category, index) => renderCategory(category, index))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    categories: getCategories(state),
    activeCategoryId: getActiveCategoryId(ownProps)
  };
};

export default compose(withRouter, connect(mapStateToProps, null))(Categories);
