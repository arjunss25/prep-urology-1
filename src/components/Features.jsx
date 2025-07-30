import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BarChart2, MessageSquare, Users, BookOpen, LineChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Automated Follow-up Tracking",
      description: "Never miss a critical appointment with our intelligent tracking system that monitors patient care pathways.",
      gradient: "from-[#4A9B8E] to-black",
      bgGradient: "from-blue-50/50 to-transparent"
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Real-time Risk Analysis",
      description: "AI-powered algorithms continuously analyze patient data to identify and prioritize high-risk cases.",
      gradient: "from-black to-[#4A9B8E]",
      bgGradient: "from-blue-50/50 to-transparent"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Multi-channel Communication",
      description: "Reach patients through their preferred channels - SMS, email, mobile app, or automated calls.",
      gradient: "from-[#4A9B8E] via-[#1D5C82] to-black",
      bgGradient: "from-blue-50/50 to-transparent"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Healthcare Team Collaboration",
      description: "Seamless communication between providers ensures coordinated care and quick response to patient needs.",
      gradient: "from-black to-[#4A9B8E]",
      bgGradient: "from-blue-50/50 to-transparent"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Patient Education Portal",
      description: "Educational resources and personalized content to help patients understand and manage their health conditions.",
      gradient: "from-[#4A9B8E] to-black",
      bgGradient: "from-blue-50/50 to-transparent"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting tools to track patient engagement and identify improvement areas.",
      gradient: "from-[#4A9B8E] via-[#1D5C82] to-black",
      bgGradient: "from-blue-50/50 to-transparent"
    }
  ];

  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-[#4A9B8E] text-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Features
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#4A9B8E] via-[#1D5C82] to-black bg-clip-text text-transparent">
              Save Lives
            </span>
          </motion.h2>

          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Our comprehensive platform provides all the tools healthcare providers need to ensure no patient falls through the cracks. From automated tracking to intelligent risk assessment, we've got you covered.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100`} />
              
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#4A9B8E] transition-all duration-300 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-6 shrink-0`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4A9B8E]/10 to-black/5 px-6 py-3 rounded-full">
            <div className="w-5 h-5 bg-gradient-to-r from-[#4A9B8E] to-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs">⚡</span>
            </div>
            <span className="text-black font-medium">Trusted by Leading Healthcare Providers</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;