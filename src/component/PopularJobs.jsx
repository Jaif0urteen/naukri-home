import React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import popularJobsData from '../../popularJobs.json';

const PopularJobs = () => {
  return (
    <section className="px-4 md:px-8 mb-8">
      <div className="max-w-5xl mx-auto">
        <LayoutGroup>
          <motion.div
            className="flex flex-col md:flex-row items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Text Section with scroll animation */}
            <motion.div
              layout
              className="w-full md:w-1/3 pr-6 mb-6 md:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <motion.h2
                className="text-lg font-semibold text-gray-800 mb-2 text-center md:text-left"
                layout
              >
                Discover jobs across popular roles
              </motion.h2>
              <motion.p
                className="text-xs text-gray-600 text-center md:text-left"
                layout
              >
                Explore jobs in high demand now relevant jobs for it
              </motion.p>
            </motion.div>

            {/* Right Grid with scroll animation */}
            <motion.div
              layout
              className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {popularJobsData.map((job) => (
                <motion.div
                  layout
                  key={job.id}
                  className="bg-white rounded-lg p-3 shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <motion.h3 className="text-sm font-medium" layout>
                    {job.title}
                  </motion.h3>
                  <motion.p className="text-xs text-gray-500" layout>
                    {job.jobCount}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default PopularJobs;
