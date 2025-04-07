import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import banners from '../../banners.json'; // Importing JSON data

const InterviewBanner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const currentBanner = banners[currentBannerIndex];

  return (
    <section className="px-4 md:px-8 mb-6">
      <div className="max-w-7xl mx-auto"> {/* Increase max-width for bigger container */}
        <motion.div
          className={`rounded-lg bg-gradient-to-r ${currentBanner.bgColor} p-12 flex items-center justify-between`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-white font-semibold text-2xl md:text-4xl"> {/* Increased font size */}
              {currentBanner.title}
            </h3>
            <p className="text-white text-lg md:text-xl opacity-90 mt-4"> {/* Increased font size */}
              {currentBanner.subtitle}
            </p>
            <button className="mt-6 bg-white text-blue-600 text-base md:text-lg font-semibold px-6 py-3 rounded"> {/* Increased button font size */}
              {currentBanner.buttonText}
            </button>
          </div>

          <div className="hidden md:block">
            <svg className="h-32 w-32" viewBox="0 0 100 100" fill="none"> {/* Increased SVG size */}
              <circle cx="50" cy="50" r="40" fill="white" fillOpacity="0.2" />
              <circle cx="50" cy="50" r="30" fill="white" fillOpacity="0.3" />
              <circle cx="50" cy="50" r="20" fill="white" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterviewBanner;
