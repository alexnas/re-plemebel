import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className='row border-bottom topbar mb-20'>
      <Link to='/' className='navbar-brand pl-200 logo-wrap'>
        <img
          src='/images/rattan1.jpeg'
          className='logo-image'
          alt='World of Rattan'
        />
        <span className='logo-name'>Rattan</span>
      </Link>

      <ul className='nav'>
        <li className='nav-item'>
          <NavLink className='nav-link btn btn-light btn-sm' to='/login'>
            <i class='fa fa-sign-in' aria-hidden='true'>
              &nbsp;
            </i>
            Sign in
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link  btn btn-light btn-sm' to='/register'>
            <i class='fa fa-sign-out' aria-hidden='true'>
              &nbsp;
            </i>
            Sign up
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
