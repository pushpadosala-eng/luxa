import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

const InstallBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Show banner after 2 seconds if not dismissed previously
    const dismissed = localStorage.getItem('install_banner_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('install_banner_dismissed', 'true');
  };

  const handleInstall = () => {
    // In a real PWA, this would trigger deferredPrompt.prompt()
    alert("To install LuxeMarket:\n1. Tap 'Share' in your browser\n2. Select 'Add to Home Screen'");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-indigo-600 text-white px-4 py-3 shadow-md animate-in slide-in-from-top-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <Download size={20} />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <span className="font-bold">Get the App</span>
            <span className="text-indigo-100 text-sm">Fast checkout & order tracking</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleInstall}
            className="bg-white text-indigo-600 text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-sm hover:bg-indigo-50 transition-colors"
          >
            Install
          </button>
          <button 
            onClick={handleDismiss}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallBanner;