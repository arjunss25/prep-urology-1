import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield } from 'lucide-react';
import { PiArrowCircleDownRightLight } from "react-icons/pi";
const Action = () => {
  const stats = [
    {
      value: "95%",
      label: "Follow-up Rate",
      gradient: "from-[#4A9B8E] to-black"
    },
    {
      value: "24/7",
      label: "Support Available",
      gradient: "from-black to-[#4A9B8E]"
    },
    {
      value: "100%",
      label: "HIPAA Compliant",
      gradient: "from-[#4A9B8E] via-[#1D5C82] to-black"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#F3F7FB] to-white py-10 md:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.span
              className="inline-block text-[#4A9B8E] text-sm font-medium mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Take Action Now
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Don't Let Another Patient Slip{" "}
              <span className="block bg-gradient-to-r from-[#4A9B8E] via-[#1D5C82] to-black bg-clip-text text-transparent leading-tight py-1">
                Through the Cracks
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-600 text-lg mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Join the healthcare providers who are revolutionizing patient care. Our
              platform ensures no patient's story ends in preventable tragedy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
  className="bg-[#4A9B8E] text-white px-8 py-3 rounded-full font-medium hover:bg-black transition-colors flex items-center gap-5 group"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  Schedule a Demo
  <PiArrowCircleDownRightLight
    className="text-[1.5rem] rotate-[-90deg] transition-transform duration-300 group-hover:rotate-0"
  />
</motion.button>

<motion.button
  className="text-black border-2 border-black/10 bg-white/50 backdrop-blur-sm px-8 py-3 rounded-full font-medium hover:border-[#4A9B8E] hover:text-[#4A9B8E] transition-colors flex items-center gap-5 group"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  Learn More
  <PiArrowCircleDownRightLight
    className="text-[1.5rem] rotate-[-90deg] transition-transform duration-300 group-hover:rotate-0"
  />
</motion.button>

            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ y: -5 }}
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#4A9B8E]/10 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl" />
    </div>
  );
};

export default Action;