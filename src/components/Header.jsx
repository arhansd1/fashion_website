import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ currentTab, setCurrentTab }) => {
  return (
    <header className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/30 sticky top-0 z-50 w-full">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 shadow-sm">
              <img 
                src="/static/10XScale.png" 
                alt="10XScale Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <span className="text-xl font-semibold text-neutral-900">Fashion WorkHub</span>
          </div>

          <nav className="flex gap-8">
            <button
              onClick={() => setCurrentTab('home')}
              className="relative pb-1"
            >
              <span className={`relative text-lg font-medium transition-colors ${
                currentTab === 'home' 
                  ? 'text-neutral-900' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}>
                Home
                {currentTab === 'home' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900"
                    layoutId="activeTab"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6
                    }}
                  />
                )}
              </span>
            </button>
            
            <button
              onClick={() => setCurrentTab('retailers')}
              className="relative pb-1"
            >
              <span className={`relative text-lg font-medium transition-colors ${
                currentTab === 'retailers' 
                  ? 'text-neutral-900' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}>
                Retailers
                {currentTab === 'retailers' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900"
                    layoutId="activeTab"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6
                    }}
                  />
                )}
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;