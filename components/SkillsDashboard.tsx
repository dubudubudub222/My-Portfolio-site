import React from 'react';

const SkillsDashboard: React.FC = () => {
  const skills = {
    illustrator: 97,
    photoshop: 95,
    premiere: 85,
    afterEffects: 80,
    c4d: 70,
    octane: 70
  };

  const getPolyPoints = (r: number, data: number[]) => {
    const total = data.length;
    return data.map((value, i) => {
      const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
      const x = 100 + (value / 100) * r * Math.cos(angle);
      const y = 100 + (value / 100) * r * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  };

  const radarData = [skills.illustrator, skills.photoshop, skills.premiere, skills.octane, skills.c4d, skills.afterEffects];
  const radarLabels = ["AI", "PS", "PR", "OCT", "C4D", "AE"];

  return (
    <section className="w-full bg-[#050505] text-white px-6 py-12 md:px-10 md:py-24 font-mono border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6">
          <div>
            <div className="inline-block bg-white/10 text-white px-2 py-1 text-xs font-bold uppercase tracking-widest mb-4">
              03. Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Technical Specs</h2>
          </div>
          <span className="text-xs text-brand-yellow mb-2 animate-pulse font-bold mt-4 md:mt-0">● SYSTEM ONLINE</span>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1: Primary Design Stack */}
          <div className="bg-[#111] p-8 border border-white/10 relative overflow-hidden group hover:border-brand-yellow/50 transition-colors">
            <div className="flex flex-col h-full justify-between gap-8">
              <div className="text-center border-b border-white/5 pb-6">
                <div className="text-5xl font-bold text-white mb-2 tracking-tighter">{skills.illustrator}.0<span className="text-2xl text-gray-500">%</span></div>
                <div className="text-[10px] uppercase tracking-widest text-brand-yellow">Peak Proficiency (Illustrator)</div>
              </div>

              <div className="space-y-6">
                {[
                  { name: 'Adobe Illustrator', val: skills.illustrator },
                  { name: 'Adobe Photoshop', val: skills.photoshop },
                  { name: 'Adobe Premiere', val: skills.premiere }
                ].map((item, i) => (
                  <div key={i} className="group/bar">
                    <div className="flex justify-between text-xs uppercase text-gray-400 mb-2 font-bold">
                      <span>{item.name}</span>
                      <span className="text-white">{item.val}%</span>
                    </div>
                    <div className="h-1 w-full bg-gray-800">
                      <div 
                        style={{ width: `${item.val}%` }} 
                        className="h-full bg-white group-hover/bar:bg-brand-yellow transition-all duration-500"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: 3D Workflow */}
          <div className="bg-[#111] p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-brand-yellow/50 transition-colors">
            <div className="absolute inset-0 pointer-events-none opacity-5" 
                 style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="relative z-10 flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">3D Pipeline</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">C4D / Octane Render</p>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Target</div>
                <div className="text-xl font-bold text-brand-yellow">100.0</div>
              </div>
            </div>

            <div className="relative h-40 w-full mt-8 flex items-center">
              <div className="absolute w-full border-t border-dashed border-gray-700 top-1/2"></div>
              
              {/* Target */}
              <div className="absolute right-[10%] top-1/4 flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
                <div className="h-12 w-[1px] bg-brand-yellow/30"></div>
              </div>

              {/* Current */}
              <div className="absolute left-[70%] top-1/2 -translate-y-[5px] flex flex-col items-center">
                 <div className="absolute bottom-1 left-1 w-[80px] h-[40px] border-l border-t border-white/20 skew-x-12 origin-bottom-left"></div>
                 <div className="w-3 h-3 border border-white bg-[#111] z-10 relative"></div>
                 <span className="absolute top-6 text-xs font-bold text-white">70%</span>
              </div>
            </div>

            <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-4">
              <div className="flex gap-6">
                {['Octane', 'C4D'].map((tool) => (
                   <div key={tool} className="flex flex-col">
                     <span className="text-[10px] text-gray-500 uppercase">{tool}</span>
                     <span className="text-sm font-bold text-white">70%</span>
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-black bg-brand-yellow px-2 py-0.5 font-bold uppercase">
                Optimizing
              </div>
            </div>
          </div>

          {/* Card 3: Skill Radar */}
          <div className="bg-[#111] p-8 border border-white/10 relative flex flex-col items-center justify-center hover:border-brand-yellow/50 transition-colors min-h-[400px]">
            <div className="absolute top-8 left-8">
              <h3 className="text-xl font-bold">Balance</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Skill Matrix</p>
            </div>

            <div className="relative w-64 h-64 mt-8">
              <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                {[20, 40, 60, 80, 100].map((r, i) => (
                  <circle key={i} cx="100" cy="100" r={r} fill="none" stroke="#333" strokeWidth="1" />
                ))}
                
                {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                   const rad = (deg * Math.PI) / 180;
                   const x = 100 + 100 * Math.cos(rad);
                   const y = 100 + 100 * Math.sin(rad);
                   return <line key={i} x1="100" y1="100" x2={x} y2={y} stroke="#222" strokeWidth="1" />;
                })}

                <polygon 
                  points={getPolyPoints(90, radarData)} 
                  fill="rgba(217, 253, 0, 0.1)" 
                  stroke="#D9FD00" 
                  strokeWidth="1.5"
                />

                 {radarData.map((val, i) => {
                    const total = radarData.length;
                    const angle = (Math.PI * 2 * i) / total;
                    const r = (val / 100) * 90;
                    const x = 100 + r * Math.cos(angle);
                    const y = 100 + r * Math.sin(angle);
                    return <rect key={i} x={x-2} y={y-2} width="4" height="4" fill="#fff" />;
                 })}
              </svg>

               {/* Labels */}
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400">AI</div>
               <div className="absolute top-[25%] -right-8 text-[10px] font-bold text-gray-400">PS</div>
               <div className="absolute bottom-[25%] -right-8 text-[10px] font-bold text-gray-400">PR</div>
               <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400">AE</div>
               <div className="absolute bottom-[25%] -left-10 text-[10px] font-bold text-gray-400">C4D</div>
               <div className="absolute top-[25%] -left-10 text-[10px] font-bold text-gray-400">OCT</div>
            </div>
          </div>

          {/* Card 4: Motion Graphics */}
          <div className="bg-[#111] p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-brand-yellow/50 transition-colors">
             <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold">Motion</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Timeline Performance</p>
                </div>
                <div className="flex gap-4 text-right">
                  <div>
                    <div className="text-lg font-bold text-brand-yellow">85.0</div>
                    <div className="text-[10px] text-gray-500">PREMIERE</div>
                  </div>
                   <div>
                    <div className="text-lg font-bold text-white">80.0</div>
                    <div className="text-[10px] text-gray-500">AE</div>
                  </div>
                </div>
             </div>

             <div className="relative flex-1 w-full flex items-end pb-4">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                   <div className="border-t border-dashed border-gray-800 w-full h-px"></div>
                   <div className="border-t border-dashed border-gray-800 w-full h-px"></div>
                   <div className="border-t border-dashed border-gray-800 w-full h-px"></div>
                </div>

                <div className="w-full flex justify-between items-end relative z-10 px-2 h-full">
                   {/* Point 1 */}
                   <div className="flex flex-col items-center gap-2" style={{ height: '40%' }}>
                      <div className="w-2 h-2 bg-white"></div>
                   </div>
                   {/* Point 2 */}
                   <div className="flex flex-col items-center gap-2" style={{ height: '60%' }}>
                       <div className="w-2 h-2 bg-white"></div>
                   </div>
                    {/* Point 3 (Peak) */}
                   <div className="flex flex-col items-center gap-2" style={{ height: '85%' }}>
                       <div className="w-3 h-3 bg-brand-yellow shadow-[0_0_15px_rgba(217,253,0,0.5)]"></div>
                   </div>
                    {/* Point 4 */}
                   <div className="flex flex-col items-center gap-2" style={{ height: '80%' }}>
                       <div className="w-2 h-2 bg-white"></div>
                   </div>
                </div>
             </div>

             <div className="flex justify-between text-[10px] text-gray-600 uppercase pt-2 border-t border-gray-800">
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
                <span>NOW</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsDashboard;