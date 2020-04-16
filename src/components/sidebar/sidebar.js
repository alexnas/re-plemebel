import React from 'react';
import BasketCart from '../basketCart/basketCart';
import Search from '../search/search';

const Sidebar = () => {
  return (
    <div className='container'>
      <div className=''>
        <BasketCart />
        <Search />
      </div>
      {/* <h3>Categories</h3> */}
    </div>
  );
};

export default Sidebar;
