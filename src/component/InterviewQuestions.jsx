import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react'; // Assuming you are using lucide-react icons
import interviewQuestionsData from '../../interviewQuestionsData.json'; // Importing the JSON data

// Importing lucide-react icons
import { Code, Briefcase, User, PieChart, BarChart2, FileText } from 'lucide-react';

// Icon mapping to link string names to actual icons
const iconMapping = {
  Code: <Code size={14} className="text-blue-600" />,
  Briefcase: <Briefcase size={14} className="text-yellow-600" />,
  User: <User size={14} className="text-green-600" />,
  PieChart: <PieChart size={14} className="text-red-600" />,
  BarChart2: <BarChart2 size={14} className="text-purple-600" />,
  FileText: <FileText size={14} className="text-gray-600" />
};

const InterviewQuestions = () => {
  return (
    <section className="px-4 md:px-8 mb-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Interview Questions by Company */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Interview questions by company
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {interviewQuestionsData.companies.map((company, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className={`bg-${company.color}-100 h-8 w-8 rounded flex items-center justify-center mr-3`}>
                      <span className={`text-${company.color}-600 text-xs`}>{company.initial}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{company.name}</h3>
                      <p className="text-xs text-gray-500">{company.questions}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-4">
                <button className="text-blue-600 text-sm font-medium flex items-center justify-center mx-auto">
                  View all companies{" "}
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Interview Questions by Role */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Interview questions by role
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                {interviewQuestionsData.roles.map((role, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className={`bg-${role.color}-100 h-8 w-8 rounded flex items-center justify-center mr-3`}>
                      {iconMapping[role.icon]} {/* Dynamically rendering the icon */}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{role.name}</h3>
                      <p className="text-xs text-gray-500">{role.questions}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-4">
                <button className="text-blue-600 text-sm font-medium flex items-center justify-center mx-auto">
                  View all roles{" "}
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InterviewQuestions;
