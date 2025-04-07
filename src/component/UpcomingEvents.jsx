import React from 'react';
import { motion } from 'framer-motion';
import upcomingEventsData from '../../upcomingEvents.json'; // Importing the JSON data
import { Calendar, Star } from 'lucide-react'; // Assuming these are the icons you're using

const UpcomingEvents = () => {
  return (
    <section className="px-4 md:px-8 mb-8 bg-blue-50 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <motion.h2
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Upcoming Events and Challenges
          </motion.h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEventsData.map((event, index) => (
            <motion.div
              key={event.id}
              className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}  // Initial state for fade-in & slide-up
              whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
              viewport={{ once: true, amount: 0.2 }} // Activate animation once, when 20% of the card is in the viewport
              transition={{
                duration: 0.8,
                delay: index * 0.2, // Stagger the animation delay for each card
              }}
            >
              <div className={`bg-${event.bgColor} px-3 py-1 flex justify-between items-center`}>
                <span className="text-xs text-blue-600">{event.status}</span>
                <span className="text-xs bg-white px-1 rounded text-blue-600">New</span>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-start mb-4">
                  <div
                    className={`bg-${event.bgColor} h-10 w-10 rounded-full flex items-center justify-center mr-4`}
                  >
                    <span className={`text-${event.iconColor} text-xl font-semibold`}>{event.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                    <div className="flex items-center text-xs text-gray-500 mt-2">
                      <Calendar size={14} className="mr-1" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">{event.category}</span>
                    <div className="flex items-center text-xs mt-1">
                      <Star size={12} className="text-yellow-400 fill-current mr-1" />
                      <span>{event.rating}</span>
                      <span className="text-gray-400 ml-1">• {event.participants}</span>
                    </div>
                  </div>
                  <button className="text-xs text-blue-600 font-semibold hover:text-blue-700 hover:underline">
                    {event.buttonText}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
