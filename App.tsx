
import React, { useState } from 'react';
import Header from './components/Header';
import AppGrid from './components/AppGrid';
import PublishAppModal from './components/PublishAppModal';
import AppDetailModal from './components/AppDetailModal';
import { type App as AppType } from './types';
import { INITIAL_APPS } from './constants';

// FIX: Removed React.FC type as it is often not needed and can cause subtle type issues.
const App = () => {
  const [apps, setApps] = useState<AppType[]>(INITIAL_APPS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<AppType | null>(null);

  const handlePublishApp = (newApp: Omit<AppType, 'id' | 'rating'>) => {
    const appWithId: AppType = {
      ...newApp,
      id: Date.now(),
      rating: +(Math.random() * 4 + 1).toFixed(1), // Random rating between 1.0 and 5.0
    };
    setApps(prevApps => [appWithId, ...prevApps]);
    setIsModalOpen(false);
  };

  const handleCardClick = (app: AppType) => {
    setSelectedApp(app);
  };

  const closeModal = () => {
    setSelectedApp(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header onPublishClick={() => setIsModalOpen(true)} />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-teal-400">التطبيقات المميزة</h2>
        <AppGrid apps={apps} onAppClick={handleCardClick} />
      </main>
      <PublishAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPublish={handlePublishApp}
      />
      {selectedApp && <AppDetailModal app={selectedApp} onClose={closeModal} />}
    </div>
  );
};

export default App;
