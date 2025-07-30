import React, { useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const timelineData = [
    {
      year: 2016,
      title: "Initial Diagnosis",
      description: "Patient referred with early symptoms. Treatment plan created but never followed.",
      icon: "📋",
      color: "bg-blue-600",
      status: "initial",
      details: "Early detection could have prevented progression. Patient was asymptomatic but at risk."
    },
    {
      year: 2018,
      title: "Missed Opportunity",
      description: "No follow-up visits. Condition continues to develop silently.",
      icon: "⚠️",
      color: "bg-yellow-500",
      status: "warning",
      details: "Lack of patient engagement and system follow-ups led to missed intervention window."
    },
    {
      year: 2022,
      title: "Warning Signs",
      description: "Symptoms worsen, but healthcare disconnection continues.",
      icon: "⚠️",
      color: "bg-orange-500",
      status: "warning",
      details: "Patient experiences mild symptoms but lacks access to coordinated care."
    },
    {
      year: 2025,
      title: "Critical Diagnosis",
      description: "Patient returns with advanced cancer. A preventable tragedy unfolds.",
      icon: "💔",
      color: "bg-red-500",
      status: "critical",
      details: "Late-stage diagnosis with limited treatment options. Prognosis significantly worsened."
    }
  ];

  // Header Animation
  const headerControls = useAnimation();
  const headerRef = React.useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    }
  }, [headerInView, headerControls]);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 md:py-16">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 mb-20 sm:mb-24">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={headerVariants}
          className="text-center"
        >
          <motion.span 
            className="inline-block px-6 py-3 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 rounded-full text-sm sm:text-base font-medium mb-6 border border-red-200"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            The Journey
          </motion.span>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Nine Years of <span className="bg-gradient-to-br from-[#4A9B8E] to-black bg-clip-text text-transparent">Silence</span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            What happens when critical follow-up care is missed? This timeline traces the silent 
            progression of a preventable condition into a life-threatening diagnosis.
          </motion.p>
        </motion.div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
        <div className="relative">
          {/* Central Timeline Line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-yellow-400 via-orange-400 to-red-500 rounded-full origin-top hidden md:block"
            initial="hidden"
            whileInView="visible"
            variants={lineVariants}
            viewport={{ once: true, margin: "-100px" }}
          />

          {/* Timeline Items */}
          <div className="space-y-20 sm:space-y-24 md:space-y-32">
            {timelineData.map((item, index) => {
              const controls = useAnimation();
              const ref = React.useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });

              useEffect(() => {
                if (isInView) {
                  controls.start("visible");
                }
              }, [isInView, controls]);

              return (
                <motion.div
                  ref={ref}
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Timeline Node */}
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 z-20"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className={`w-14 h-14 sm:w-16 sm:h-16 ${item.color} rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl shadow-lg border-4 border-white`}
                      animate={activeIndex === index ? { 
                        boxShadow: [
                          "0 0 0 0 rgba(59, 130, 246, 0)",
                          "0 0 0 10px rgba(59, 130, 246, 0.1)",
                          "0 0 0 20px rgba(59, 130, 246, 0)"
                        ]
                      } : {}}
                      transition={{ duration: 1.5, repeat: activeIndex === index ? Infinity : 0 }}
                    >
                      {item.icon}
                    </motion.div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ${index % 2 === 0 
                      ? 'md:mr-auto md:pr-16 md:pl-0 pl-8 pr-8' 
                      : 'md:ml-auto md:pl-16 md:pr-0 pl-8 pr-8'
                    } relative z-10`}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 border border-gray-100 shadow-sm overflow-hidden"
                      whileHover={{
                        boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Year Badge */}
                      <motion.div 
                        className={`inline-flex items-center px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-medium mb-4 sm:mb-5 ${
                          item.status === 'initial' ? 'bg-blue-100 text-blue-600' :
                          item.status === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-red-100 text-red-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {item.year}
                      </motion.div>

                      {/* Title */}
                      <motion.h3 
                        className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {item.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p 
                        className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {item.description}
                      </motion.p>

                      {/* Expanded Details */}
                      <motion.div
                        className="overflow-hidden"
                        initial={false}
                        animate={{ height: activeIndex === index ? "auto" : 0, opacity: activeIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <p className="text-gray-500 text-xs sm:text-sm border-t border-gray-100 pt-3 sm:pt-4">
                          {item.details}
                        </p>
                      </motion.div>

                      {/* Status Indicator */}
                      <motion.div 
                        className={`mt-4 flex items-center gap-2 text-xs sm:text-sm font-medium ${
                          item.status === 'initial' ? 'text-blue-600' :
                          item.status === 'warning' ? 'text-yellow-600' :
                          'text-red-600'
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <motion.div 
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                            item.status === 'initial' ? 'bg-blue-500' :
                            item.status === 'warning' ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          animate={activeIndex === index ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 1.5, repeat: activeIndex === index ? Infinity : 0 }}
                        />
                        {item.status === 'initial' ? 'Treatment Available' :
                         item.status === 'warning' ? 'Intervention Needed' :
                         'Critical Stage'}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div 
        className="max-w-4xl mx-auto px-6 mt-24 sm:mt-32 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-6 py-3 sm:py-4 bg-white rounded-full border border-gray-100 shadow-sm">
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            This timeline represents a preventable healthcare failure. Early detection and consistent follow-up care can save lives.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
