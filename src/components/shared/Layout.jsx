import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Headslides from '../slides/Headslides';
import Searchslides from '../slides/Searchslides';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex flex-row overflow-hidden bg-neutral-100 w-screen h-screen relative'>
      <Headslides isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isSidebarOpen && (
        <div 
          className='fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden' // Apply the overlay only on mobile devices
          onClick={toggleSidebar}
        ></div>
      )}
      <div className='flex flex-col flex-1'>
        <Searchslides toggleSidebar={toggleSidebar} />
        <div className='flex-grow'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
