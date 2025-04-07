import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import premiumServicesData from '../../premiumServices.json'; // Importing the JSON data

// Importing icons from lucide-react (assuming you have these installed)
import { FileText, Star, MessageSquare } from 'lucide-react';

const PremiumServices = () => {
  return (
    <section className="px-4 md:px-8 mb-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6">
        {/* Scroll animation for entire section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Section */}
          <div className="w-full md:w-2/3">
            {/* Section Title */}
            <motion.h2
              className="text-2xl font-semibold text-gray-800 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Accelerate your job search with premium services
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-sm text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Stand out among other candidates, get faster responses and find
              the right job sooner.
            </motion.p>

            {/* Premium Badge (SVG) */}
            

            {/* Service Items */}
            <div className="flex flex-wrap gap-4 mt-4">
              {premiumServicesData.map((service) => {
                const Icon = service.icon === 'FileText' ? FileText :
                            service.icon === 'Star' ? Star :
                            service.icon === 'MessageSquare' ? MessageSquare : null;
                return (
                  <motion.div
                    key={service.id}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <Icon size={14} className="text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700">{service.name}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Learn More Button */}
            <motion.button
              className="bg-blue-600 text-white rounded px-4 py-2 text-sm font-medium mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Learn more
            </motion.button>
          </div>

          {/* Right Section - Replace Image with SVG Icon */}
          <div className="w-full md:w-1/3">
            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* SVG Icon for Premium Service */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
                <circle cx="60" cy="60" r="58" fill="none" stroke="#1D4ED8" strokeWidth="4"/>
                <polygon points="60,10 65,40 95,40 70,60 80,90 60,70 40,90 50,60 25,40 55,40" fill="#1D4ED8"/>
                <text x="60" y="80" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#1D4ED8">
                  
                </text>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumServices;
