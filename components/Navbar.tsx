import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatting to match "1:45 PM"
      const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start p-6 md:p-10 text-[10px] md:text-xs font-bold tracking-widest uppercase pointer-events-none">
      {/* Left: Branding */}
      <div className="pointer-events-auto cursor-pointer hover:opacity-60 transition-opacity">
        [Alejandro Mejias]
      </div>

      {/* Center: Navigation */}
      <div className="hidden md:flex gap-12 pointer-events-auto">
        <a href="#" className="hover:line-through decoration-2">Work ©</a>
        <a href="#" className="hover:line-through decoration-2">About</a>
        <a href="#" className="hover:line-through decoration-2">Reach Out</a>
      </div>

      {/* Right: Location/Time Pill */}
      <div className="bg-brand-yellow px-3 py-1.5 rounded-full text-black flex items-center gap-2 pointer-events-auto shadow-sm">
        <span>MEL [AU] {time}</span>
        <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
      </div>
    </nav>
  );
};

export default Navbar;