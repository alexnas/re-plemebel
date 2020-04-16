import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className='row border-bottom'>
      <div className='pl-200'>
        <img
          src='/images/rattan1.jpeg'
          className='logo-image'
          alt='World of Rattan'
        />
        <span className='logo-name'>Rattan</span>
      </div>
      <div className='col-md-2'>
        <div>Home</div>
        <div>Leasure</div>
        <div>Garden</div>
      </div>
      <div>
        <div>Меню</div>
      </div>
    </div>
  );
};

export default Header;
