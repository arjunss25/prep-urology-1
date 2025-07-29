// LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { Search, Menu, Zap } from 'lucide-react';

const LandingPage = () => {
  const [currentMarqueeSet, setCurrentMarqueeSet] = useState(0);

  // Sample employee data for marquees
  const employees = [
    { name: "Dr. Sarah Chen", role: "Urologist", image: "👩‍⚕️", quote: "Early detection changed everything for my patients." },
    { name: "James Wilson", role: "Patient", image: "👨", quote: "The care I received was life-changing." },
    { name: "Dr. Michael Lee", role: "Surgeon", image: "👨‍⚕️", quote: "Precision and timing make all the difference." },
    { name: "Emily Parker", role: "Nurse", image: "👩‍⚕️", quote: "Every patient deserves prompt, quality care." },
    { name: "Robert Thompson", role: "Patient", image: "👨", quote: "I'm grateful for the early intervention." },
    { name: "Dr. Lisa Wong", role: "Specialist", image: "👩‍⚕️", quote: "Prevention is always better than cure." },
    { name: "Mark Davis", role: "Patient", image: "👨", quote: "The support system here is incredible." },
    { name: "Dr. John Smith", role: "Urologist", image: "👨‍⚕️", quote: "We're transforming patient outcomes." },
  ];

  const MarqueeCard = ({ employee, index }) => (
    <div className="flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100 mx-2 min-w-[300px]">
      <div className="flex flex-col space-y-3">
        <p className="text-gray-700 italic text-sm">&ldquo;{employee.quote}&rdquo;</p>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-lg">
            {employee.image}
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-sm">{employee.name}</div>
            <div className="text-gray-500 text-xs">{employee.role}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const MovingMarquee = ({ employees, direction = 'left', speed = 'slow' }) => {
    const animationDuration = speed === 'slow' ? '30s' : '20s';
    
    return (
      <div className="overflow-hidden whitespace-nowrap">
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
      @keyframes marquee-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .animate-marquee {
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-black" />
              <span className="text-xl font-bold text-black">Lattice</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium">Product</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium">Services</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium">Career</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium">About</a>
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition-colors" />
              <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Login →
              </button>
              <Menu className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition-colors md:hidden" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section - TEXT CONTENT REPLACED */}
        <div className="max-w-4xl mx-auto text-center py-20 px-6">
          {/* Main heading with stagger animation */}
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Every
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Delayed </span>
            Treatment
          </h1>
          
          {/* Subheading */}
          <h2 className="text-xl md:text-2xl font-light text-gray-500 mb-6"> {/* Adjusted margin */}
            Has a <span className="text-cyan-400 font-medium">Story</span>
          </h2>
          
          {/* Divider line (approximated) */}
          <div className="w-24 h-px bg-gradient-to-r from-cyan-400 to-transparent mx-auto mb-8"></div> {/* Centered and added margin */}
          
          {/* Paragraph */}
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"> {/* Adjusted text color and margin to fit original */}
            In healthcare, time transcends mere chronology—it embodies the
            <span className="text-gray-800 font-medium"> critical difference between prevention and regret</span>.
            Discover how one patient's journey revolutionized our approach to early intervention.
          </p>
          
          {/* CTA Buttons - TEXT CONTENT REPLACED */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Read The Story {/* Changed text */}
            </button>
            <button className="text-black border border-gray-300 px-8 py-3 rounded-full font-medium hover:border-black transition-colors">
              Our Solution {/* Changed text */}
            </button>
          </div>
        </div>

        {/* Image Section with Overlays - TEXT CONTENT REPLACED */}
        <div className="relative w-full px-6 box-section">
          <div className="relative h-[600px] bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50">
              <div className="absolute right-20 top-10 w-64 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl opacity-60"></div>
              <div className="absolute right-32 top-20 w-48 h-64 bg-white/30 rounded-xl backdrop-blur-sm"></div>
            </div>

            {/* Main content */}
            <div className="absolute left-8 top-8 max-w-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Efficiently transform your
                <br />
                <span className="text-blue-600">candidate experience.</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Making care in the field happen in patterns that are proven and that
                <br />
                create the best possible outcomes for everyone involved.
              </p>
            </div>

            {/* Marquee sections */}
            <div className="absolute left-0 right-0 bottom-48">
              <MovingMarquee employees={employees.slice(0, 4)} direction="left" speed="slow" />
            </div>
            <div className="absolute left-0 right-0 bottom-12">
              <MovingMarquee employees={employees.slice(4)} direction="right" speed="slow" />
            </div>

            {/* Filter tags */}
            <div className="absolute top-8 right-8">
              <div className="flex space-x-2">
                <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-600">
                  Healthcare
                </span>
                <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-600">
                  Patient Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;