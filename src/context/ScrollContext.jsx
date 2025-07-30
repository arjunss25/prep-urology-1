import React, { createContext, useContext, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

const ScrollContext = createContext({
  lenis: null,
  setLenis: () => {},
});

export const ScrollProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    setLenis(lenis);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ lenis, setLenis }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

// Helper function to scroll to elements
export const scrollTo = (target, options = {}) => {
  const { lenis } = useScroll();
  if (lenis) {
    lenis.scrollTo(target, {
      offset: -100,
      duration: 1.5,
      ...options,
    });
  }
}; 