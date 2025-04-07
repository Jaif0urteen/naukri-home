import React from 'react';
import { motion } from 'framer-motion';
import campusPlatformData from '../../CampusPlatform.json'; // Import JSON data

const CampusPlatform = () => {
  return (
    <section className="px-4 md:px-8 mb-8 bg-blue-50 py-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 md:mb-0">
            <motion.div
              className="flex items-center mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                className="h-4 w-4 text-blue-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="ml-1 text-sm font-medium text-blue-600">
                {campusPlatformData.platformName}
              </span>
              <span className="ml-1 text-xs font-medium bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                {campusPlatformData.platformType}
              </span>
            </motion.div>
            <motion.h3
              className="text-base font-medium text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {campusPlatformData.description}
            </motion.h3>
            <motion.p
              className="text-xs text-gray-600 mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {campusPlatformData.details.join(', ')}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {campusPlatformData.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="bg-white text-xs text-gray-600 px-2 py-1 rounded"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.button
              className="bg-blue-600 text-white rounded px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              whileHover={{
                scale: 1.1,
                backgroundColor: '#2563eb',
                boxShadow: '0px 4px 20px rgba(37, 99, 235, 0.3)',
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              {campusPlatformData.buttonText}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusPlatform;
