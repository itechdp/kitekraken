import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* 
 * SAFE BROWSING COMPLIANCE: Scroll to Top Component
 * Purpose: Ensures all page navigations start from the top of the page
 * Improves UX and ensures disclaimer banners are visible
 */

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    
    // Additional check after a microtask
    Promise.resolve().then(() => {
      window.scrollTo(0, 0);
    });
    
    // Final fallback
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
