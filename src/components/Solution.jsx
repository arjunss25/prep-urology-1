import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { CheckCircle, Zap, Users } from 'lucide-react';
import { PiArrowCircleDownRightLight } from "react-icons/pi";
const Solution = () => {
  const features = [
    {
      title: "Smart Follow-up System",
      description: "AI-powered scheduling and reminders adapt to each patient's behavior and medical risk factors.",
      icon: <CheckCircle className="w-7 h-7" />,
      color: "from-[#4A9B8E] to-black",
      bgGradient: "from-blue-50/50 to-transparent"
    },
    {
      title: "Risk Assessment",
      description: "Ongoing patient data monitoring identifies high-risk cases for prompt medical attention.",
      icon: <Zap className="w-7 h-7" />,
      color: "from-black to-[#4A9B8E]",
      bgGradient: "from-blue-50/50 to-transparent"
    },
    {
      title: "Patient Engagement",
      description: "An interactive platform keeps patients informed, involved, and empowered about their care.",
      icon: <Users className="w-7 h-7" />,
      color: "from-[#4A9B8E] via-[#1D5C82] to-black",
      bgGradient: "from-blue-50/50 to-transparent"
    }
  ];

  const FeatureCard = ({ feature, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    React.useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, delay: index * 0.2 }
          }
        }}
        className="relative group h-full"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100`} />
        
        <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#4A9B8E] transition-all duration-300 h-full flex flex-col">
          <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 shrink-0`}>
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm flex-grow">{feature.description}</p>
        </div>
      </motion.div>
    );
  };

  const headerRef = React.useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const headerControls = useAnimation();

  React.useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    }
  }, [headerInView, headerControls]);

  return (
    <div className="min-h-screen bg-white py-10 md:py-16">
      {/* Header Section */}
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerControls}
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 1, ease: "easeOut" }
          }
        }}
        className="max-w-5xl mx-auto px-6 text-center mb-20"
      >
        <motion.span 
          className="inline-block px-6 py-2.5 bg-[#F3F7FB] text-black rounded-full text-sm font-medium mb-8"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          The Solution
        </motion.span>

        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Preventing the Next{" "}
          <span className="block bg-gradient-to-r from-[#4A9B8E] via-[#1D5C82] to-black bg-clip-text text-transparent">
            Missed Follow-up
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          A next-generation platform combining <span className="font-medium text-[#4A9B8E]">clinical intelligence</span> with <span className="font-medium text-black">compassion-driven automation</span>. Never lose track of follow-up—keep patients safe, engaged, and cared for.
        </motion.p>
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div 
        className="max-w-3xl mx-auto px-6 mt-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-br from-gray-50 to-[#F3F7FB] rounded-2xl p-12">
          <h2 className="text-2xl font-bold text-black mb-4">
            Ready to Transform Patient Care?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm">
            Join leading providers in revolutionizing medical follow-up. Proactive, AI-driven, and always patient-first. Never miss the moments that matter most.
          </p>
          <motion.button
  className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-[#4A9B8E] transition-colors flex items-center gap-5 group mx-auto"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  Get Started Today
  <PiArrowCircleDownRightLight
    className="text-[1.5rem] rotate-[-90deg] transition-transform duration-300 group-hover:rotate-0"
  />
</motion.button>

        </div>
      </motion.div>
    </div>
  );
};

export default Solution;
