import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Code,
  PieChart,
  BarChart2,
  Building,
  Star,
  MapPin,
  User,
  FileText,
} from 'lucide-react';
import jobCategories from '../../jobCategories.json';

const JobCategories = () => {
  const iconMap = {
    Briefcase,
    Code,
    PieChart,
    BarChart2,
    Building,
    Star,
    MapPin,
    User,
    FileText,
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // slower stagger
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.6,
        ease: 'easeInOut', // smoother easing
      },
    },
  };

  return (
    <section className="px-4 md:px-8 mb-8">
      <motion.div
        className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {jobCategories.map((category) => {
          const IconComponent = iconMap[category.icon];
          return (
            <motion.button
              key={category.id}
              className="flex items-center space-x-3 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm md:text-base text-gray-700 font-medium transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
              variants={buttonVariants}
              whileHover={{
                scale: 1.06,
                transition: {
                  type: 'spring',
                  stiffness: 180, // smoother bounce
                  damping: 18,
                },
              }}
            >
              <IconComponent size={18} />
              <span className="text-sm md:text-base">{category.name}</span>
            </motion.button>
          );
        })}
      </motion.div>
    </section>
  );
};

export default JobCategories;
