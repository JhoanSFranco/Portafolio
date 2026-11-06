import { useCallback } from 'react';
import { scrollToElement } from '../utils/helpers';

/**
 * Custom hook for smooth scrolling navigation
 */
export const useSmoothScroll = () => {
  const handleScrollTo = useCallback((elementId: string) => {
    scrollToElement(elementId);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      handleScrollTo(targetId);
      // Update the URL without triggering a second (competing) native jump
      window.history.replaceState(null, '', `#${targetId}`);
    },
    [handleScrollTo]
  );

  return { handleScrollTo, handleNavClick };
};

