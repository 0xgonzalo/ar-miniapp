'use client';

import { useState, useEffect } from 'react';

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the welcome popup before
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');

    if (!hasSeenWelcome) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenWelcome', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={handleClose}
      ></div>

      {/* Popup Content */}
      <div
        className="relative bg-[#0000FA] rounded-2xl shadow-2xl max-w-md w-full p-8 text-white"
        style={{ backgroundColor: '#0000FA' }}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Welcome to the Mini AR APP Experience
        </h1>

        <ol className="space-y-4 mb-8 text-left">
          <li className="flex items-start">
            <span className="font-bold mr-3 flex-shrink-0">1.</span>
            <span>Navigate through the Menu to select an Artwork to scan</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-3 flex-shrink-0">2.</span>
            <span>Scan the Artwork with your camera and wait for the model to be loaded</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-3 flex-shrink-0">3.</span>
            <span>Collect and share on Feed ✨</span>
          </li>
        </ol>

        <button
          onClick={handleClose}
          className="w-full py-3 px-6 bg-white text-[#0000FA] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
