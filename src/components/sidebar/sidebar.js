import React from 'react';
import BasketCart from '../basketCart/basketCart';
import Search from '../search/search';
import Categories from '../categories/categories';

const Sidebar = () => {
  return (
    <div className='container'>
      <div className=''>
        <BasketCart />
        <Search />
        <Categories />
      </div>
    </div>
  );
};

export default Sidebar;
