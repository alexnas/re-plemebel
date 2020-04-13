import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>Sidebar</div>
        <div className='col-md-9'>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
