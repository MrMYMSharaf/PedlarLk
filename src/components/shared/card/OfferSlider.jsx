import React, { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://picsum.photos/200/300?1', // Added query params to ensure different images
  'https://picsum.photos/200/300?2',
  'https://picsum.photos/200/300?3',
  'https://picsum.photos/200/300?4',
  'https://picsum.photos/200/300?5',
  'https://picsum.photos/200/300?6',
];

const OfferSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-2xl font-bold mb-4">Our Offers</h2>
      <div className="flex items-center justify-center relative w-full h-96"> {/* Adjust height */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded cursor-pointer left-4 z-10"
        >
          Prev
        </button>
        <div className="flex overflow-hidden relative w-full h-full">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={image} alt={`Offer ${index}`} className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded cursor-pointer right-4 z-10"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OfferSlider;
