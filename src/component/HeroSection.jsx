import React, { useState } from "react";
import { Search, ChevronDown, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("Select experience");
  const [location, setLocation] = useState("");

  return (
    <motion.section
      className="pt-8 pb-4 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-gray-800"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Find your dream job now
        </motion.h1>
        <motion.p
          className="mt-2 text-gray-600 text-sm"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          5 lakh+ jobs for you to explore
        </motion.p>
      </div>

      {/* Search Bar */}
      <div className="max-w-5xl mx-auto mt-6">
        <motion.div
          className="bg-white rounded-md shadow-sm flex flex-col md:flex-row"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 flex items-center px-4">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Enter skill / designation / companies"
              className="flex-1 px-3 py-3 focus:outline-none text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 flex items-center px-4">
            <div className="relative flex-1">
              <select
                className="appearance-none bg-transparent w-full py-3 px-3 pr-8 focus:outline-none text-sm"
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
              >
                <option>Select experience</option>
                <option>0-1 Years</option>
                <option>1-3 Years</option>
                <option>3-5 Years</option>
                <option>5-10 Years</option>
                <option>10+ Years</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
          <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 flex items-center px-4">
            <MapPin size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Enter location"
              className="flex-1 px-3 py-3 focus:outline-none text-sm"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="px-2 py-2">
            <motion.button
              className="bg-blue-600 text-white rounded px-6 py-2 text-sm font-medium w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Search
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
