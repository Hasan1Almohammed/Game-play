
import React from 'react';
import { type App } from '../types';
import CloseIcon from './icons/CloseIcon';

interface AppDetailModalProps {
  app: App;
  onClose: () => void;
}

const AppDetailModal: React.FC<AppDetailModalProps> = ({ app, onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="bg-gray-800 rounded-lg shadow-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95"
                onClick={e => e.stopPropagation()}
                aria-modal="true"
                role="dialog"
                aria-labelledby="app-detail-title"
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <img src={app.icon} alt={app.name} className="w-20 h-20 rounded-2xl object-cover" />
                        <div>
                            <h2 id="app-detail-title" className="text-3xl font-bold text-white">{app.name}</h2>
                            <p className="text-teal-400 text-lg">{app.category}</p>
                        </div>
                    </div>
                    <button onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-white transition-colors p-1">
                        <CloseIcon className="w-7 h-7" />
                    </button>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-200">عن التطبيق</h3>
                    <p className="text-gray-300 leading-relaxed">{app.description}</p>
                </div>
                
                {app.screenshots.length > 0 && (
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-200">لقطات الشاشة</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {app.screenshots.map((ss, index) => (
                                <img key={index} src={ss} alt={`Screenshot ${index + 1}`} className="rounded-lg object-cover w-full h-auto" />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppDetailModal;
