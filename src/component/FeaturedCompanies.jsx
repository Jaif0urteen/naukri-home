import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react'; // Importing icons from lucide-react
import featuredCompaniesData from '../../featuredCompanies.json'; // Import JSON data

const FeaturedCompanies = () => {
  return (
    <section className="px-4 md:px-8 mb-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Featured Companies Actively Hiring
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {featuredCompaniesData.map((company) => (
            <motion.div
              key={company.id}
              className={`bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.05, // Slightly scale up the card
                rotate: 5, // Rotate the card slightly
                y: -5, // Slight upward movement
                transition: { duration: 0.3 }, // Smooth transition for the hover effect
              }}
            >
              <div
                className={`${company.bgColor} h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center`}
              >
                <span className={`font-bold ${company.textColor} text-xl`}>
                  {company.logoInitials}
                </span>
              </div>
              <h3 className="font-semibold text-lg">{company.companyName}</h3>
              <div className="flex items-center justify-center mt-2">
                <Star size={14} className="text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600 ml-1">{company.rating}</span>
                <span className="text-xs text-gray-400 ml-1">({company.reviewsCount} reviews)</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">{company.description}</p>
              <button className="mt-3 text-blue-600 text-sm font-medium hover:underline">
                {company.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="text-blue-600 text-sm font-medium flex items-center justify-center mx-auto">
            View all companies <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
