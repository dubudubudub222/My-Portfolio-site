import React from 'react';
import { Utensils, Bell, HeartHandshake, Waves, Soup, Sparkles, Zap, Repeat, ShieldCheck } from 'lucide-react';

const IntroGrid: React.FC = () => {
  return (
    <section className="relative z-10 w-full bg-white px-6 py-12 md:px-10 md:py-24 border-b border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Text Block */}
        <div className="lg:col-span-4 flex flex-col justify-between pr-8">
          <div>
            <div className="inline-block bg-brand-yellow text-black px-2 py-1 text-xs font-bold uppercase tracking-widest mb-6">
              02. Services
            </div>
            <h2 className="font-serif text-4xl mb-6">Retainer-style<br/>Relationship</h2>
            <p className="text-sm md:text-base font-medium leading-relaxed text-gray-500 mb-8">
              The Bruno membership offers clients a flexible, high-quality partnership. 
              Enjoy working with top-tier designers and developers without the constraints of traditional contracts.
            </p>
          </div>
          <div className="hidden lg:block border-t border-black pt-4">
            <p className="text-xs uppercase tracking-widest font-bold">Updated: 2025.Q1</p>
          </div>
        </div>

        {/* Right Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 1 - Black - Speedy */}
          <div className="bg-[#111] text-white p-8 md:min-h-[360px] flex flex-col justify-between group relative overflow-hidden border border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-shadow duration-300">
             <div className="flex justify-between items-start">
               <Zap size={32} className="text-brand-yellow" strokeWidth={1.5} />
               <span className="text-xs text-gray-500 uppercase tracking-widest">[01]</span>
             </div>

             <div className="relative z-10 mt-auto">
              <h3 className="font-mono text-2xl mb-2 font-bold tracking-tighter">Speedy<br/>Turnovers</h3>
              <div className="w-12 h-1 bg-brand-yellow mb-4"></div>
              <p className="text-gray-400 text-xs leading-relaxed max-w-[80%]">
                Receive your design or web development within a few business days on average.
              </p>
            </div>
          </div>

          {/* Card 2 - Yellow - Request */}
          <div className="bg-brand-yellow text-black p-8 md:min-h-[360px] flex flex-col justify-between group relative overflow-hidden border border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
             <div className="flex justify-between items-start">
               <Repeat size={32} strokeWidth={1.5} />
               <span className="text-xs text-black/50 uppercase tracking-widest">[02]</span>
             </div>

             <div className="flex-1 flex items-center justify-center my-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Bell size={120} strokeWidth={0.5} />
             </div>

             <div className="relative z-10 mt-auto">
              <h3 className="font-mono text-2xl mb-2 font-bold tracking-tighter">Worry-free<br/>Pricing</h3>
              <div className="w-12 h-1 bg-black mb-4"></div>
              <p className="text-black/80 text-xs leading-relaxed max-w-[90%]">
                Subscribe & request as many design & web development requests as you'd like.
              </p>
            </div>
          </div>

          {/* Card 3 - White/Gray - Care */}
          <div className="bg-white text-black p-8 md:col-span-2 min-h-[240px] flex flex-row items-center justify-between gap-8 relative overflow-hidden border border-black hover:shadow-[8px_8px_0px_0px_rgba(217,253,0,1)] transition-shadow duration-300">
             <div className="flex flex-col h-full justify-between z-10 max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={24} className="text-gray-400" />
                  <span className="text-xs text-gray-400 uppercase tracking-widest">[03]</span>
                </div>
                <div>
                  <h3 className="font-mono text-2xl mb-2 font-bold tracking-tighter">No Frustration</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    We'll revise the work until you're 100% satisfied. No questions asked.
                  </p>
                </div>
             </div>

             {/* Background Pattern */}
             <div className="absolute right-0 top-0 h-full w-1/3 border-l border-dashed border-gray-200 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
             
             <div className="hidden md:flex items-center justify-center h-16 w-16 border border-black rounded-full bg-brand-yellow shrink-0 z-10">
                <HeartHandshake size={24} />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroGrid;