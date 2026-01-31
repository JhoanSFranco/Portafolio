import { useState, useEffect } from 'react';
import { SCROLL_THRESHOLD } from '../constants';

/**
 * Custom hook to detect scroll position
 */
export const useScroll = (threshold: number = SCROLL_THRESHOLD): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};

