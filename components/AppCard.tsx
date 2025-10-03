
import React from 'react';
import { type App } from '../types';
import StarIcon from './icons/StarIcon';

interface AppCardProps {
  app: App;
  onClick: () => void;
}

// FIX: Removed React.FC and explicitly typed props. This modernizes the component definition and may resolve JSX type errors by simplifying the component's type.
const AppCard = ({ app, onClick }: AppCardProps) => {
  return (
    <div 
        onClick={onClick}
        className="bg-gray-800 rounded-2xl p-4 flex flex-col items-start cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:bg-gray-700 shadow-lg hover:shadow-teal-500/20"
    >
      <img
        src={app.icon}
        alt={`${app.name} icon`}
        className="w-full h-auto aspect-square rounded-xl object-cover mb-4 shadow-md transition-transform duration-300 group-hover:scale-110"
      />
      <h3 className="text-md font-bold text-gray-100 truncate w-full">{app.name}</h3>
      <p className="text-sm text-gray-400">{app.category}</p>
      <div className="flex items-center mt-1 text-sm text-gray-300">
        <span>{app.rating}</span>
        <StarIcon className="w-4 h-4 text-yellow-400 ms-1" />
      </div>
    </div>
  );
};

export default AppCard;
