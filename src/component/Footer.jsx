import React from 'react';
import { motion } from 'framer-motion';  // For animation
import footerData from '../../footerData.json';  // Import the JSON data

const Footer = () => {
  return (
    <footer className="bg-white px-4 md:px-8 pt-8 pb-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between flex-wrap">
          {/* Left Section: Logo and Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-blue-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14l8-8" stroke="white" strokeWidth="2" />
              </svg>
              <span className="ml-2 text-md font-bold text-blue-600">
                {footerData.logo.text}
              </span>
            </div>

            <div className="flex mt-4 space-x-3">
              {footerData.socialLinks.map((link) => (
                <a key={link.name} href={link.url} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{link.name}</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={link.svgPath} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Section: Footer Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {footerData.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium text-gray-800">{section.title}</h3>
                <ul className="mt-2 space-y-2">
                  {section.links &&
                    section.links.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.url} className="text-xs text-gray-500 hover:text-gray-700">
                          {link.text}
                        </a>
                      </li>
                    ))}
                  {section.content && (
                    <p className="text-xs text-gray-500 mt-2">{section.content}</p>
                  )}
                  {section.storeLinks && (
                    <div className="flex flex-col space-y-2 mt-3">
                      {section.storeLinks.map((store, idx) => (
                        <a key={idx} href={store.url}>
                          <img src={store.src} alt={store.alt} />
                        </a>
                      ))}
                    </div>
                  )}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500 text-center"
        >
          &copy; 2025 All Rights Reserved Jai Prakash Pandey
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
