import React, { useEffect } from 'react';

const UnicornBackground: React.FC = () => {
  useEffect(() => {
    // Re-trigger init if the script loaded before the component mounted
    if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    } else if (window.UnicornStudio && window.UnicornStudio.isInitialized) {
        // Sometimes strictly necessary to re-init on route changes in SPAs, 
        // but for a single hero, this ensures it catches the DOM element.
        // Accessing internal init if available or relying on the observer in the library.
        if(typeof window.UnicornStudio.init === 'function') {
            window.UnicornStudio.init();
        }
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      {/* 
        The prompt specified width/height in px, but for a responsive hero 
        we use 100% width/height to fill the viewport 
      */}
      <div 
        data-us-project="IrWGioFAYx83LP1aCKH5" 
        style={{ width: '100%', height: '100%' }}
      ></div>
    </div>
  );
};

// Add type definition for global window object to avoid TS errors
declare global {
  interface Window {
    UnicornStudio: any;
  }
}

export default UnicornBackground;