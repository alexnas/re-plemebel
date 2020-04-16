import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import Sidebar from '../../components/sidebar/sidebar';

const MainLayout = ({ children }) => {
  const layoutStyle = {
    minHeight: '500px'
  };
  return (
    <div className='container-fluid'>
      <Header />
      <div className='row' style={layoutStyle}>
        <div className='col-md-2'>
          <Sidebar />
        </div>
        <div className='col-md-10'>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
