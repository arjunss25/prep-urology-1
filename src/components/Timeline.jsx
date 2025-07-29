import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineData = [
    {
      year: 2016,
      title: "Initial Diagnosis",
      description: "Patient referred with early symptoms. Treatment plan created but never followed.",
      icon: "📋",
      color: "bg-blue-500",
      status: "initial"
    },
    {
      year: 2018,
      title: "Missed Opportunity",
      description: "No follow-up visits. Condition continues to develop silently.",
      icon: "⚠️",
      color: "bg-yellow-500",
      status: "warning"
    },
    {
      year: 2022,
      title: "Warning Signs",
      description: "Symptoms worsen, but healthcare disconnection continues.",
      icon: "⚠️",
      color: "bg-orange-500",
      status: "warning"
    },
    {
      year: 2025,
      title: "Critical Diagnosis",
      description: "Patient returns with advanced cancer. A preventable tragedy unfolds.",
      icon: "💔",
      color: "bg-red-500",
      status: "critical"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            The Journey
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nine Years of Silence
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            What happens when critical follow-up care is missed? This timeline traces the silent 
            progression of a preventable condition into a life-threatening diagnosis.
          </p>
        </motion.div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 via-yellow-300 via-orange-300 to-red-400 rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white text-2xl shadow-lg border-4 border-white`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${
                  index % 2 === 0 ? 'mr-auto pr-16' : 'ml-auto pl-16'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Year Badge */}
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-4 ${
                      item.status === 'initial' ? 'bg-blue-100 text-blue-700' :
                      item.status === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {item.year}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                    
                    {/* Status Indicator */}
                    <div className={`mt-4 flex items-center gap-2 text-sm font-medium ${
                      item.status === 'initial' ? 'text-blue-600' :
                      item.status === 'warning' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        item.status === 'initial' ? 'bg-blue-500' :
                        item.status === 'warning' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}></div>
                      {item.status === 'initial' ? 'Treatment Available' :
                       item.status === 'warning' ? 'Intervention Needed' :
                       'Critical Stage'}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 mt-20 text-center"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't Let This Be Your Story
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Early detection and consistent follow-up care can prevent this tragic progression. 
            Take control of your health journey today.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
            Schedule Your Follow-Up
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;