import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  year: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, year, image }) => {
  return (
    <div className="bg-white p-2 border border-gray-200 w-[200px] md:w-[240px] shadow-lg pointer-events-auto group cursor-pointer transition-transform hover:-translate-y-2">
      <div className="flex justify-between items-center mb-2 text-[10px] font-bold tracking-widest uppercase">
        <span>{name}</span>
        <span className="text-gray-500">[{year}]</span>
      </div>
      
      <div className="relative aspect-square overflow-hidden bg-gray-100 mb-2">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase border-t border-gray-100 pt-2">
        <span>[Watch]</span>
        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </div>
  );
};

export default ProjectCard;