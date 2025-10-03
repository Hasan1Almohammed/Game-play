
import React, { useState, useCallback } from 'react';
import { type App } from '../types';
import { APP_CATEGORIES } from '../constants';
import CloseIcon from './icons/CloseIcon';
import UploadIcon from './icons/UploadIcon';

interface PublishAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPublish: (newApp: Omit<App, 'id' | 'rating'>) => void;
}

// FIX: Removed React.FC and explicitly typed props. This modernizes the component definition and may resolve JSX type errors by simplifying the component's type.
const PublishAppModal = ({ isOpen, onClose, onPublish }: PublishAppModalProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(APP_CATEGORIES[0]);
  const [icon, setIcon] = useState<string | null>(null);
  const [screenshots, setScreenshots] = useState<string[]>([]);
  const [error, setError] = useState('');

  const resetForm = useCallback(() => {
    setName('');
    setDescription('');
    setCategory(APP_CATEGORIES[0]);
    setIcon(null);
    setScreenshots([]);
    setError('');
  }, []);

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (err) => reject(err);
    });
  };

  const handleIconChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const base64 = await handleFileToBase64(e.target.files[0]);
      setIcon(base64);
    }
  };

  const handleScreenshotsChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      // FIX: Explicitly type the 'file' parameter to ensure it's treated as a File object.
      // TypeScript was inferring 'file' as 'unknown', causing an error when passing it to 'handleFileToBase64'.
      const base64Promises = files.map((file: File) => handleFileToBase64(file));
      const base64Screenshots = await Promise.all(base64Promises);
      setScreenshots(prev => [...prev, ...base64Screenshots]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !icon) {
      setError('يرجى ملء جميع الحقول المطلوبة (الاسم، الوصف، والأيقونة).');
      return;
    }
    onPublish({ name, description, category, icon, screenshots });
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-2xl p-6 w-full max-w-lg max-h-[95vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-teal-400">نشر تطبيق جديد</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-white">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {error && <p className="bg-red-900/50 text-red-300 p-3 rounded-md mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="appName" className="block mb-2 text-sm font-medium text-gray-300">اسم التطبيق</label>
            <input type="text" id="appName" value={name} onChange={e => setName(e.target.value)} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" required />
          </div>
          <div>
            <label htmlFor="appDescription" className="block mb-2 text-sm font-medium text-gray-300">الوصف</label>
            <textarea id="appDescription" rows={4} value={description} onChange={e => setDescription(e.target.value)} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" required></textarea>
          </div>
          <div>
            <label htmlFor="appCategory" className="block mb-2 text-sm font-medium text-gray-300">الفئة</label>
            <select id="appCategory" value={category} onChange={e => setCategory(e.target.value)} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5">
              {APP_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium text-gray-300">أيقونة التطبيق (مطلوب)</label>
              <label htmlFor="appIcon" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadIcon className="w-8 h-8 mb-2 text-gray-400" />
                  <p className="text-sm text-gray-400">اسحب وأفلت أو انقر للتحميل</p>
                </div>
                <input id="appIcon" type="file" accept="image/*" className="hidden" onChange={handleIconChange} />
              </label>
            </div>
            {icon && <img src={icon} alt="Icon preview" className="w-32 h-32 rounded-lg object-cover" />}
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">لقطات الشاشة (اختياري)</label>
            <label htmlFor="appScreenshots" className="flex flex-col items-center justify-center w-full py-4 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center">
                  <UploadIcon className="w-8 h-8 mb-2 text-gray-400" />
                  <p className="text-sm text-gray-400">تحميل لقطات الشاشة</p>
                </div>
              <input id="appScreenshots" type="file" accept="image/*" multiple className="hidden" onChange={handleScreenshotsChange} />
            </label>
            <div className="flex flex-wrap gap-2 mt-4">
              {screenshots.map((ss, index) => <img key={index} src={ss} alt="Screenshot preview" className="w-24 h-24 rounded-md object-cover" />)}
            </div>
          </div>
          
          <button type="submit" className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">نشر التطبيق</button>
        </form>
      </div>
    </div>
  );
};

export default PublishAppModal;
