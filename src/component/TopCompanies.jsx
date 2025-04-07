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
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 12,
                mass: 1,
                delay: index * 0.1 // Staggered animation
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
            >
              <motion.h3 
                className="font-semibold text-lg text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: index * 0.1 + 0.2
                }}
              >
                {companyData.category}
              </motion.h3>
              
              <motion.p 
                className="text-xs md:text-sm text-white opacity-80 mt-1"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: index * 0.1 + 0.3
                }}
              >
                {companyData.hiringCount} actively hiring
              </motion.p>
              
              <div className="mt-4 flex gap-3">
                {companyData.companies.map((company, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-2 rounded-full w-14 h-14 flex items-center justify-center cursor-pointer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                        delay: index * 0.1 + 0.4 + (idx * 0.1)
                      }
                    }}
                    whileHover={{
                      scale: 1.5, // Increase scale significantly on hover
                      rotate: 10, // Slight rotation for dynamic feel
                      backgroundColor: '#1D4ED8', // Change background color to blue
                      color: '#fff', // Change text color to white
                      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Add shadow for depth
                      transition: { 
                        type: "spring",
                        stiffness: 300,
                        damping: 8,
                        mass: 1.2
                      },
                    }}
                    whileTap={{
                      scale: 0.95, // Shrink slightly when clicked
                      rotate: 0, // Return to no rotation
                      transition: { 
                        type: "spring",
                        stiffness: 400,
                        damping: 15 
                      },
                    }}
                    drag // Enable drag functionality
                    dragConstraints={{ 
                      left: -10, 
                      right: 10, 
                      top: -10, 
                      bottom: 10 
                    }} // Constrain drag to small area for feedback
                    dragElastic={0.8} // Elastic feel when dragging
                  >
                    <motion.span 
                      className="text-xs font-bold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: idx + 1
                      }}
                    >
                      {company}
                    </motion.span>
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