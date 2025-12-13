import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroGrid from './components/IntroGrid';
import SkillsDashboard from './components/SkillsDashboard';
import AboutSection from './components/AboutSection';
import UnicornBackground from './components/UnicornBackground';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* 3D Background - Fixed position */}
      <UnicornBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <AboutSection />
        <IntroGrid />
        <SkillsDashboard />
      </div>
      
      {/* Custom Styles for vertical writing mode if utility not sufficient */}
      <style>{`
        .writing-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default App;