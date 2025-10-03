
import React from 'react';

interface HeaderProps {
  onPublishClick: () => void;
}

// FIX: Removed React.FC and explicitly typed props. This modernizes the component definition and may resolve JSX type errors by simplifying the component's type.
const Header = ({ onPublishClick }: HeaderProps) => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-teal-400">متجر</span> التطبيقات
        </h1>
        <button
          onClick={onPublishClick}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
        >
          نشر تطبيق جديد
        </button>
      </div>
    </header>
  );
};

export default Header;
