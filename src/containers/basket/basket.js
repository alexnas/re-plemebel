import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  getBasketArticlesWithCount,
  getTotalBasketPrice
} from '../../selectors';
import {
  removeArticleFromBasket,
  cleanBasket,
  basketCheckout
} from '../../actions/actions';

const Basket = ({
  articles,
  totalPrice,
  removeArticleFromBasket,
  cleanBasket,
  basketCheckout
}) => {
  const isBasketEmpty = articles.length === 0;
  const renderContent = () => {
    return (
      <div>
        {isBasketEmpty && <div>Your basket is empty</div>}
        <div className='table-responsive'>
          <table className='table-bordered table-striped table-condensed cf'>
            <tbody>
              {articles.map((article, index) => (
                <tr key={index} className='item-checkout'>
                  <td className='first-column-checkout'>
                    <img
                      src={article.image}
                      alt={article.name}
                      className='img-thumbnail'
                    />
                  </td>
                  <td>{article.name}</td>
                  <td>${article.price}</td>
                  <td>{article.count}</td>
                  <td>
                    <span onClick={() => removeArticleFromBasket(article.id)}>
                      <i className='fa fa-trash-o fa-lg delete-cart'></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!isBasketEmpty && (
            <div>
              <div className='pull-right total-user-checkout'>
                <b>Total:</b>&nbsp; ${totalPrice}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  const renderSidebar = () => (
    <div>
      <Link to='/' className='btn btn-info btn-block'>
        <i class='fa fa-info-circle fa-lg' aria-hidden='true'>
          &nbsp;
        </i>
        <span>Continue shopping!</span>
      </Link>

      {!isBasketEmpty && (
        <div className='pt20'>
          <button onClick={cleanBasket} className='btn btn-danger  btn-block'>
            <i className='fa fa-trash-o fa-lg' aria-hidden='true'>
              &nbsp;
            </i>
            <span>Clean cart</span>
          </button>

          <button
            onClick={() => basketCheckout(articles)}
            className='btn btn-success btn-block'
          >
            <i class='fa fa-envelope-open-o fa-lg' aria-hidden='true'>
              &nbsp;
            </i>
            <span>Checkout</span>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className='container'>
      <div className='row  pt20'>
        <div className='col-md-9'>{renderContent()}</div>
        <div className='col-md-3'>{renderSidebar()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    articles: getBasketArticlesWithCount(state),
    totalPrice: getTotalBasketPrice(state)
  };
};

const mapDispatchToProps = {
  removeArticleFromBasket,
  cleanBasket,
  basketCheckout
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
