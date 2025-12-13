import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Brain, Target, ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const softSkills = [
    { label: '유연성', value: 95 },
    { label: '소통', value: 90 },
    { label: '공감', value: 85 },
    { label: '분석', value: 80 },
    { label: '직관', value: 90 },
  ];

  const getRadarPoints = (radius: number) => {
    const total = softSkills.length;
    return softSkills.map((skill, i) => {
      const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
      const x = 100 + (skill.value / 100) * radius * Math.cos(angle);
      const y = 100 + (skill.value / 100) * radius * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <section className="relative z-10 w-full bg-white text-black border-b border-black font-mono">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Text Content */}
        <div className="p-6 md:p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-black">
          <div className="inline-block bg-black text-brand-yellow px-2 py-1 text-xs font-bold uppercase tracking-widest mb-6">
            01. Profile
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-[0.9] tracking-tight">
            The Slime-like<br/>
            <span className="italic text-gray-400">Designer.</span>
          </h2>

          <div className="font-sans text-lg font-medium leading-relaxed mb-8">
            "어떤 용기에도 자유롭게 담기는 슬라임처럼, <span className="bg-brand-yellow px-1">어떤 프로젝트에도 완벽하게 적응합니다.</span>"
          </div>

          <div className={`text-sm md:text-base text-gray-600 font-mono leading-relaxed transition-all duration-500 ease-in-out ${isExpanded ? '' : 'max-h-[200px] overflow-hidden relative'}`}>
             <p className="mb-6">
              빠르게 변화하는 트렌드 속에서도 변하지 않는 본질을 꿰뚫어보며, 사용자와 비즈니스 사이의 간극을 부드럽게 메우는 역할을 수행해왔습니다. 저의 유연함은 단순한 수동성이 아닌, 최적의 솔루션을 향한 적극적인 탐구의 결과입니다.
            </p>
            <div className={isExpanded ? 'block animate-fade-in space-y-6' : 'hidden'}>
               <p>
                 지난 5년간 에이전시와 인하우스, 스타트업을 거치며 다양한 형태의 조직 문화를 경험했습니다. 
                 타이트한 마감 기한이 요구되는 에이전시에서는 <strong>속도와 효율성</strong>을, 깊이 있는 제품 고도화가 필요한 스타트업에서는 <strong>집요함과 논리적 설득</strong>을 무기로 삼았습니다. 
               </p>
               <div className="border-l-2 border-black pl-4 py-2 my-8">
                  <h3 className="font-bold text-black font-sans text-lg mb-2">Process & Philosophy</h3>
                  <p>
                    디자인은 데이터를 기반으로 가설을 세우고, 시각적 언어로 검증하는 과정입니다.
                    기술적 제약을 창의적 제약으로 받아들이고, 구현 가능한 최선의 디자인을 제안함으로써 팀 전체의 퍼포먼스를 높입니다.
                  </p>
               </div>
               <div className="grid grid-cols-2 gap-4 text-xs uppercase tracking-widest border-t border-black pt-6 mt-8">
                  <div>
                    <span className="text-gray-400 block mb-1">Contact</span>
                    <a href="mailto:heejoo.kim@design.slime" className="hover:bg-brand-yellow transition-colors">heejoo.kim@design.slime</a>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Availability</span>
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Open for Work
                    </span>
                  </div>
               </div>
            </div>
            
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
            )}
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-8 flex items-center gap-3 text-xs font-bold tracking-widest uppercase border border-black px-4 py-3 hover:bg-black hover:text-white transition-all group w-full justify-between"
          >
            <span>{isExpanded ? 'Collapse Information' : 'Expand Information'}</span>
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        {/* Right Column: Visual Charts */}
        <div className="bg-[#F4F4F4] p-6 md:p-12 lg:p-24 flex flex-col gap-12 justify-center">
          
          {/* Chart 1: Soft Skills Radar */}
          <div className="relative">
            <div className="flex justify-between items-end mb-8 border-b border-black pb-2">
              <h3 className="font-bold text-sm uppercase tracking-widest">[Adaptability Index]</h3>
              <Brain size={16} strokeWidth={1.5} />
            </div>
            
            <div className="relative w-full aspect-square max-w-[320px] mx-auto">
               <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                 {[20, 40, 60, 80, 100].map(r => (
                   <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#ddd" strokeDasharray="4 4" />
                 ))}
                 
                 <path 
                   d={`M ${getRadarPoints(100)} Z`} 
                   fill="#D9FD00" 
                   fillOpacity="0.8"
                   stroke="#111" 
                   strokeWidth="1.5"
                   className="transition-all duration-1000 ease-out hover:scale-105 origin-center mix-blend-multiply"
                 />

                 {softSkills.map((skill, i) => {
                    const angle = (Math.PI * 2 * i) / softSkills.length - Math.PI / 2;
                    const x = 100 + 130 * Math.cos(angle);
                    const y = 100 + 130 * Math.sin(angle);
                    return (
                      <text 
                        key={i}
                        x={x} 
                        y={y} 
                        textAnchor="middle" 
                        dominantBaseline="middle" 
                        className="text-[11px] font-bold fill-black uppercase tracking-widest"
                      >
                        {skill.label}
                      </text>
                    );
                 })}
               </svg>
            </div>
          </div>

          {/* Chart 2: Work Style Breakdown */}
          <div className="relative">
             <div className="flex justify-between items-end mb-6 border-b border-black pb-2">
              <h3 className="font-bold text-sm uppercase tracking-widest">[Focus Allocation]</h3>
              <Target size={16} strokeWidth={1.5} />
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'UX Research', val: '30%', w: '30%' },
                { label: 'UI / Visual', val: '45%', w: '45%' },
                { label: 'Interaction', val: '25%', w: '25%' }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between mb-2 text-xs font-bold uppercase">
                    <span>{item.label}</span>
                    <span>{item.val}</span>
                  </div>
                  <div className="h-4 w-full bg-white border border-black p-0.5">
                    <div 
                      className={`h-full bg-black group-hover:bg-brand-yellow transition-all duration-500 ease-out`} 
                      style={{ width: item.w }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;