import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="bg-white shadow-sm py-3 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <motion.svg
              className="h-8 w-8 text-blue-600"
              viewBox="0 0 24 24"
              fill="currentColor"
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14l8-8" stroke="white" strokeWidth="2" />
            </motion.svg>
            <motion.span
              className="ml-2 text-lg font-bold text-blue-600"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              naukri
            </motion.span>
          </div>

          <motion.nav
            className="hidden md:flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.a
              href="#"
              className="text-sm text-gray-600 hover:text-blue-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Jobs
            </motion.a>
            <motion.a
              href="#"
              className="text-sm text-gray-600 hover:text-blue-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Companies
            </motion.a>
            <motion.a
              href="#"
              className="text-sm text-gray-600 hover:text-blue-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Services
            </motion.a>
          </motion.nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <motion.button
              className="text-sm text-blue-600 border border-blue-600 px-4 py-1 rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Login
            </motion.button>
            <motion.button
              className="text-sm text-white bg-blue-600 px-4 py-1 rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Register
            </motion.button>
          </div>
          <div className="hidden md:block">
            <motion.button
              className="text-sm text-gray-600 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              For employers <ChevronDown size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
