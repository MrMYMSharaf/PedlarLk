import React from 'react';
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/categoriesL';

const Categories = () => {
  return (
    <div className='p-4'>
      {/* Adjust the maxHeight value to fit your layout */}
      <h1 className="text-2xl font-bold mb-2">Categories</h1>
      <div className="flex flex-wrap justify-center items-center md:justify-start md:flex-row md:flex-wrap pb-32 
      overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200" style={{ maxHeight: 'calc(100vh - 200px)'}}>
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <div
            key={link.key}
            className="flex flex-col items-center justify-center w-1/2 md:w-[15%] p-4"
          >
            <div className="flex items-center justify-center bg-gray-200 rounded-full p-4">
              {React.cloneElement(link.icon, { size: 50 })} {/* Adjust the size as needed */}
            </div>
            <div className="text-center mt-2">{link.label}</div>
            <div><span className='text-sm'>100,000 ads</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
