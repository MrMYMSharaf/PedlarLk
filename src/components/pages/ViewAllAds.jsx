// ViewAllAds.js
import React, { useState } from 'react';
import AdsCard from '../shared/AdsCard';
import { FaTh, FaBars } from 'react-icons/fa';

const ViewAllAds = () => {
  const [layout, setLayout] = useState('grid');

  const toggleLayout = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <div className='flex flex-row'>
      <div className='flex-1 p-4'>
        <div className='flex justify-between'>
          <div className='flex justify-start mb-4'>
             <h1 className="text-2xl font-bold">View All Ads</h1>
          </div>
        
          <div className='flex justify-end mb-4'>
            <FaTh onClick={() => toggleLayout('grid')} className={`cursor-pointer mx-2 ${layout === 'grid' ? 'text-blue-500' : ''}`} />
            <FaBars onClick={() => toggleLayout('list')} className={`cursor-pointer mx-2 ${layout === 'list' ? 'text-blue-500' : ''}`} />
          </div>
        </div>
        <div className={`grid ${layout === 'grid' ? 'grid-cols-4 gap-4' : 'grid-cols-1 gap-2'} overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 pb-32`} style={{ maxHeight: 'calc(100vh - 150px)'}}>
          <AdsCard layout={layout} />
          <AdsCard layout={layout} />
          <AdsCard layout={layout} />
          <AdsCard layout={layout} />
          <AdsCard layout={layout} />
          <AdsCard layout={layout} />
          <AdsCard layout={layout} />
          <AdsCard layout={layout} />
          <AdsCard layout={layout} />
          <AdsCard layout={layout} />
          <AdsCard layout={layout} />
          <AdsCard layout={layout} />
          {/* Add more AdsCard components as needed */}
        </div>
      </div>
      <div className='w-[25%] md:w-[15%] h-screen bg-white'>
        google adsense in react js
      </div>
    </div>
  );
};

export default ViewAllAds;
