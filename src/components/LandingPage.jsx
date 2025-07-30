
import React, { useState, useEffect } from 'react';
import { Search, Menu, Zap, X, Play } from 'lucide-react';
import { mainNavLinks } from './navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '../context/ScrollContext';
import { PiArrowCircleDownRightLight } from "react-icons/pi";

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
        >
          <X className="w-5 h-5" />
        </button>
        <video
          className="w-full h-full"
          controls
          autoPlay
        >
          <source src="/demo_video.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </motion.div>
  );
};

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { lenis } = useScroll();

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        lenis.scrollTo(target, {
          offset: -100,
          duration: 1.5,
        });
      }
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  // Sample employee data for marquees
  const employees = [
    { name: "Dr. Sarah Chen", role: "Urologist", image: "/profile.png", quote: "Early detection changed everything for my patients." },
    { name: "James Wilson", role: "Patient", image: "/profile.png", quote: "The care I received was life-changing." },
    { name: "Dr. Michael Lee", role: "Surgeon", image: "/profile.png", quote: "Precision and timing make all the difference." },
    { name: "Emily Parker", role: "Nurse", image: "/profile.png", quote: "Every patient deserves prompt, quality care." },
    { name: "Robert Thompson", role: "Patient", image: "/profile.png", quote: "I'm grateful for the early intervention." },
    { name: "Dr. Lisa Wong", role: "Specialist", image: "/profile.png", quote: "Prevention is always better than cure." },
    { name: "Mark Davis", role: "Patient", image: "/profile.png", quote: "The support system here is incredible." },
    { name: "Dr. John Smith", role: "Urologist", image: "/profile.png", quote: "We're transforming patient outcomes." },
  ];

  const MarqueeCard = ({ employee, index }) => (
    <div className="flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-100 mx-2 sm:mx-3 w-[260px] sm:w-[280px] md:w-[300px]">
      <div className="flex flex-col space-y-2 sm:space-y-3">
        <p className="text-gray-700 italic text-xs sm:text-sm line-clamp-2">&ldquo;{employee.quote}&rdquo;</p>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4A9B8E] to-black">
            <img 
              src={employee.image} 
              alt={employee.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/profile.png';
              }}
            />
          </div>
          <div>
            <div className="font-semibold text-black text-xs sm:text-sm">{employee.name}</div>
            <div className="text-gray-500 text-[10px] sm:text-xs">{employee.role}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const MovingMarquee = ({ employees, direction = 'left', speed = 'slow' }) => {
    const animationDuration = speed === 'slow' ? '30s' : '20s';
    
    return (
      <div className="overflow-hidden whitespace-nowrap relative">
        <div className="absolute inset-y-0 left-0 w-[100px] bg-gradient-to-r from-[#F3F7FB] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-[100px] bg-gradient-to-l from-[#F3F7FB] to-transparent z-10"></div>
        <div 
          className="inline-flex animate-marquee"
          style={{
            animation: `marquee-${direction} ${animationDuration} linear infinite`,
          }}
        >
          {[...employees, ...employees].map((employee, index) => (
            <MarqueeCard key={index} employee={employee} index={index} />
          ))}
        </div>
      </div>
    );
  };

  useEffect(() => {
    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(calc(-100% / 2)); }
      }
      @keyframes marquee-reverse {
        from { transform: translateX(calc(-100% / 2)); }
        to { transform: translateX(0); }
      }
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-marquee {
        animation: marquee 40s linear infinite;
        display: flex;
        gap: 8px;
      }
      .animate-marquee-reverse {
        animation: marquee-reverse 40s linear infinite;
        display: flex;
        gap: 8px;
      }
      .animate-gradient {
        background-size: 200% auto;
        animation: gradient 3s ease infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white fixed w-full top-0 z-50 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <img src="/prep-urology-logo.svg" alt="" />
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {mainNavLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-600 hover:text-black transition-colors font-medium"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Right side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#4A9B8E] transition-colors">
                Request Demo
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 flex items-center justify-center text-gray-600 cursor-pointer hover:text-black transition-colors md:hidden"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-0 top-[73px] bg-white z-40 md:hidden"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <div className="flex-1 overflow-y-auto px-6 py-8">
                  <div className="space-y-8">
                    {/* Navigation Links */}
                    <div className="space-y-6">
                      {mainNavLinks.map((link, index) => (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <a
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="block text-2xl font-medium text-black hover:text-[#4A9B8E] transition-colors"
                          >
                            {link.name}
                          </a>
                        </motion.div>
                      ))}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Contact</h3>
                      <div className="space-y-3">
                        <a href="mailto:contact@prep-urology.com" className="block text-gray-600 hover:text-black transition-colors">
                          contact@prep-urology.com
                        </a>
                        <a href="tel:+1234567890" className="block text-gray-600 hover:text-black transition-colors">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                          </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                          </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-auto border-t border-gray-100">
                  <div className="px-6 py-8">
                    <button 
                      onClick={() => {
                        setIsMenuOpen(false);
                        // Add your demo request logic here
                      }}
                      className="w-full bg-black text-white py-4 rounded-full text-base font-medium hover:bg-[#4A9B8E] transition-colors flex items-center justify-center gap-2"
                    >
                      Request Demo
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="relative pt-20">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariant}
          className="max-w-4xl mx-auto text-center py-20 px-6"
        >
          {/* Main heading with stagger animation */}
          <motion.h1 
            variants={fadeInUpVariant}
            className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight"
          >
            <motion.span
              variants={fadeInUpVariant}
              className="inline-block"
            >
              Every
            </motion.span>
            <motion.span
              variants={fadeInUpVariant}
              className="bg-gradient-to-r from-[#4A9B8E] via-[#1D5C82] to-[#4A9B8E] bg-clip-text text-transparent animate-gradient inline-block"
            > Delayed </motion.span>
            <motion.span
              variants={fadeInUpVariant}
              className="inline-block"
            >
              Treatment
            </motion.span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.h2 
            variants={fadeInUpVariant}
            className="text-xl md:text-2xl font-light text-gray-500 mb-6"
          >
            Has a <span className="text-[#4A9B8E] font-medium">Story</span>
          </motion.h2>
          
          {/* Divider line */}
          <motion.div 
            variants={fadeInUpVariant}
            className="w-24 h-px bg-gradient-to-r from-[#4A9B8E] via-[#1D5C82] to-transparent mx-auto mb-8"
          />
          
          {/* Paragraph */}
          <motion.p 
            variants={fadeInUpVariant}
            className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
          >
            In healthcare, time transcends mere chronology—it embodies the
            <span className="text-black font-medium"> critical difference between prevention and regret</span>.
            Discover how one patient's journey revolutionized our approach to early intervention.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUpVariant}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
              <button
                className="min-w-[180px] bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-[#4A9B8E] transition-colors flex items-center justify-center gap-5 group border-2 border-transparent whitespace-nowrap"
              >
                Read The Story
                <PiArrowCircleDownRightLight
                  className="text-[1.5rem] rotate-[-90deg] transition-transform duration-300 group-hover:rotate-0"
                />
              </button>

              <button
                className="min-w-[180px] text-black flex items-center justify-center gap-5 group border-2 border-gray-200 px-8 py-3 rounded-full font-medium hover:border-[#4A9B8E] hover:text-[#4A9B8E] transition-colors whitespace-nowrap"
              >
                Our Solution
                <PiArrowCircleDownRightLight
                  className="text-[1.5rem] rotate-[-90deg] transition-transform duration-300 group-hover:rotate-0"
                />
              </button>

          </motion.div>
        </motion.div>

        {/* Box Section */}
        <div className="relative w-full px-4 sm:px-6 md:px-8 box-section">
          <div className="relative min-h-[600px] sm:min-h-[650px] md:min-h-[700px] bg-black rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/BG-IMG.svg" 
                alt="Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/70"></div>
            </div>
            
            {/* Main content */}
            <div className="absolute left-4 sm:left-8 top-6 sm:top-8 max-w-xl z-20 p-4 sm:p-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Revolutionizing Urology Care
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#4A9B8E] to-white bg-clip-text text-transparent">Through Early Detection</span>
              </h2>
              <p className="text-gray-300 mb-8 text-sm sm:text-base">
                Empowering healthcare providers with advanced diagnostic tools and
                streamlined workflows for better patient outcomes.
              </p>

              {/* Watch Demo Button */}
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-medium group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#4A9B8E] rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-[#4A9B8E]" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Filter tags */}
            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20">
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 backdrop-blur-sm px-3 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white">
                  Healthcare
                </span>
                <span className="bg-[#4A9B8E]/20 backdrop-blur-sm px-3 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-[#4A9B8E]">
                  Patient Care
                </span>
              </div>
            </div>

            {/* Marquee container with responsive height */}
            <div className="absolute left-0 right-0 bottom-0 h-[240px] sm:h-[280px] md:h-[320px] w-full md:w-1/2 md:right-0 z-10">
              <div className="absolute left-0 right-0 bottom-[140px] sm:bottom-[160px] md:bottom-[180px]">
                <div className="overflow-hidden whitespace-nowrap relative">
                  <div className="absolute inset-y-0 left-0 w-[30px] sm:w-[50px] md:w-[100px] bg-gradient-to-r from-black to-transparent z-10"></div>
                  <div className="absolute inset-y-0 right-0 w-[30px] sm:w-[50px] md:w-[100px] bg-gradient-to-l from-black to-transparent z-10"></div>
                  <div className="animate-marquee">
                    {[...employees.slice(0, 4), ...employees.slice(0, 4), ...employees.slice(0, 4)].map((employee, index) => (
                      <MarqueeCard key={index} employee={employee} index={index} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute left-0 right-0 bottom-8 sm:bottom-12 md:bottom-16">
                <div className="overflow-hidden whitespace-nowrap relative">
                  <div className="absolute inset-y-0 left-0 w-[30px] sm:w-[50px] md:w-[100px] bg-gradient-to-r from-black to-transparent z-10"></div>
                  <div className="absolute inset-y-0 right-0 w-[30px] sm:w-[50px] md:w-[100px] bg-gradient-to-l from-black to-transparent z-10"></div>
                  <div className="animate-marquee-reverse">
                    {[...employees.slice(4), ...employees.slice(4), ...employees.slice(4)].map((employee, index) => (
                      <MarqueeCard key={index} employee={employee} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <VideoModal 
            isOpen={isVideoModalOpen} 
            onClose={() => setIsVideoModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;