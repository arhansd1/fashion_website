import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HomePage from './components/HomePage';
import RetailersPage from './components/RetailersPage';

const App = () => {
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <div className="min-h-screen">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="overflow-hidden">
        <AnimatePresence mode="wait">
          {currentTab === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <HomePage setCurrentTab={setCurrentTab} />
            </motion.div>
          ) : (
            <motion.div
              key="retailers"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <RetailersPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {currentTab === 'home' && (
        <footer className="bg-slate-900 text-white py-8 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-400">© 2024 10XScale. Connecting fashion students with retail opportunities.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;