import React, { useState } from 'react';
import AdsCard from '../shared/card/AdsCard';
import { FaTh, FaBars } from 'react-icons/fa';

const ViewAllAds = () => {
  const [layout, setLayout] = useState('grid');

  const toggleLayout = (newLayout) => {
    setLayout(newLayout);
  };

  const ads = Array.from({ length: 12 }).map((_, index) => (
    <AdsCard key={index} layout={layout} />
  ));

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">View All Ads</h1>
          <div className="flex flex-row">
            <FaTh
              onClick={() => toggleLayout('grid')}
              className={`cursor-pointer mx-2 ${layout === 'grid' ? 'text-blue-500' : ''}`}
            />
            <FaBars
              onClick={() => toggleLayout('list')}
              className={`cursor-pointer mx-2 ${layout === 'list' ? 'text-blue-500' : ''}`}
            />
          </div>
        </div>
        <div
          className={`grid ${layout === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' : 'grid-cols-1 gap-2'} overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 pb-32`}
          style={{ maxHeight: 'calc(100vh - 150px)' }}
        >
          {ads}
        </div>
      </div>
      <div className="hidden lg:block w-[25%] md:w-[15%] h-screen bg-white">
        google adsense in react js
      </div>
    </div>
  );
};

export default ViewAllAds;
