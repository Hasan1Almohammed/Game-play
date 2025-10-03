
import React from 'react';
import { type App } from '../types';
import AppCard from './AppCard';

interface AppGridProps {
  apps: App[];
  onAppClick: (app: App) => void;
}

// FIX: Removed React.FC and explicitly typed props. This modernizes the component definition and may resolve JSX type errors by simplifying the component's type.
const AppGrid = ({ apps, onAppClick }: AppGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {apps.map((app) => (
        <AppCard key={app.id} app={app} onClick={() => onAppClick(app)} />
      ))}
    </div>
  );
};

export default AppGrid;
