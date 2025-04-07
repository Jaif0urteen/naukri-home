import React from 'react';
import { motion } from 'framer-motion';
import topCompaniesData from '../../topCompanies.json'; // Importing JSON data

const TopCompanies = () => {
  return (
    <section className="px-4 md:px-8 mb-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Top Companies Hiring Now
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topCompaniesData.map((companyData, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-r ${companyData.bgColor} p-6 rounded-lg shadow-lg`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Left for even index, right for odd index
              animate={{ opacity: 1, x: 0 }} // Bring it to normal position
              exit={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Animate out in reverse direction
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <h3 className="font-semibold text-lg text-white">{companyData.category}</h3>
              <p className="text-xs md:text-sm text-white opacity-80 mt-1">
                {companyData.hiringCount} actively hiring
              </p>

              <div className="mt-4 flex gap-3">
                {companyData.companies.map((company, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-2 rounded-full w-14 h-14 flex items-center justify-center cursor-pointer"
                    whileHover={{
                      scale: 1.5, // Increase scale significantly on hover
                      rotate: 10, // Slight rotation for dynamic feel
                      backgroundColor: '#1D4ED8', // Change background color to blue
                      color: '#fff', // Change text color to white
                      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Add shadow for depth
                      transition: { duration: 0.3 }, // Smooth transition
                    }}
                    whileTap={{
                      scale: 0.95, // Shrink slightly when clicked
                      transition: { duration: 0.2 },
                    }}
                  >
                    <span className="text-xs font-bold">{company}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
