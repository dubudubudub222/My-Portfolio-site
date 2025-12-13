import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Hero: React.FC = () => {
  return (
    <main className="relative z-10 w-full h-screen flex flex-col justify-between p-6 md:p-10 pointer-events-none">
      
      {/* Top Section: Text Descriptions */}
      <div className="flex justify-between items-start mt-20 w-full">
        {/* Left Text */}
        <div className="max-w-[300px] text-[10px] md:text-xs font-bold leading-relaxed uppercase tracking-wide text-brand-black">
          <p>
            Award-winning experience designer and creative partnering with brands to create captivating digital solutions.
          </p>
        </div>

        {/* Right Stacked Info */}
        <div className="hidden md:flex flex-col items-end text-[10px] md:text-xs font-bold leading-relaxed uppercase tracking-wide text-right text-brand-black">
          <span>[Good Design Award Winner 2023/24]</span>
          <span>[10 Years Freelancing]</span>
          <span>[UI/UX]</span>
        </div>
      </div>

      {/* Center Section is left empty for the 3D Background Element */}

      {/* Bottom Section: Card, Scroll, CTA */}
      <div className="flex items-end justify-between w-full">
        
        {/* Bottom Left: Project Card */}
        <div className="hidden md:block">
          <ProjectCard 
            name="Frontrow" 
            year="2025" 
            image="https://picsum.photos/400/400?grayscale" 
          />
        </div>

        {/* Bottom Center: Scroll Indicator */}
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-widest animate-bounce">
          <span>Scroll</span>
          <div className="flex flex-col -space-y-1 text-gray-400">
            <ArrowUp size={12} />
            <ArrowDown size={12} />
          </div>
        </div>

        {/* Bottom Right: CTA */}
        <div className="pointer-events-auto">
          <button className="bg-brand-black text-white p-1 pr-6 pl-1 rounded flex items-center gap-4 hover:bg-gray-900 transition-colors group shadow-2xl">
            <div className="w-10 h-10 overflow-hidden rounded bg-gray-700">
                <img src="https://picsum.photos/id/64/200/200" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase group-hover:underline decoration-brand-yellow decoration-2 underline-offset-4">
              Book a call
            </span>
          </button>
        </div>

      </div>

      {/* Floating Right Tab: Honors */}
      <div className="fixed top-1/2 right-0 -translate-y-1/2 bg-black text-white py-6 px-2 md:px-3 z-40 cursor-pointer hover:bg-brand-yellow hover:text-black transition-colors pointer-events-auto">
        <div className="writing-vertical-rl text-[10px] md:text-xs font-bold tracking-widest uppercase flex items-center gap-4">
           <span>Honors</span>
           <span className="font-serif italic text-lg lowercase">W.</span>
        </div>
      </div>

    </main>
  );
};

export default Hero;