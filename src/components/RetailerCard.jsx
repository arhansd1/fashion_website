// src/components/RetailerCard.jsx
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { hoverScaleSmall } from '../utils/PresetMotions';
import CopyButton from '../utils/CopyButton';
import RetailerModal from './RetailerModal';

const RetailerCard = ({ retailer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
        className="group bg-white/70 backdrop-blur-2xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border-2 border-neutral-200/70 h-80"
        onClick={openModal}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && openModal(e)}
      >
      <div className="flex h-full">
        {/* Left Side - Details */}
        <div className="flex-1 p-6 space-y-3 flex flex-col justify-start pt-6 min-w-0">
          <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors truncate">
            {retailer.companyName}
          </h3>
          
          <div className="flex items-center gap-2 text-neutral-600">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">{retailer.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-4 py-1.5 bg-neutral-100/80 text-neutral-700 rounded-full text-sm font-semibold backdrop-blur-xl">
              {retailer.type}
            </span>
          </div>

          <div className="pt-4 border-t-2 border-neutral-200/70 space-y-2">
            {retailer.phoneNumber && (
              <div className="flex items-center justify-between bg-neutral-50/80 rounded-lg p-2 border border-neutral-200/70 group">
                <span className="text-sm text-neutral-700 font-medium truncate pr-2">
                  {retailer.phoneNumber}
                </span>
                <CopyButton text={retailer.phoneNumber} label="phone number" />
              </div>
            )}
            {retailer.email && (
              <div className="flex items-center justify-between bg-neutral-50/80 rounded-lg p-2 border border-neutral-200/70 group">
                <span className="text-sm text-neutral-700 font-medium truncate pr-2">
                  {retailer.email}
                </span>
                <CopyButton text={retailer.email} label="email" />
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-48 bg-neutral-100/50 relative overflow-hidden flex-shrink-0 rounded-lg m-2 border-2 border-neutral-200/70">
          <div className="absolute inset-0 flex items-center justify-center">
            {retailer.photos && retailer.photos.length > 0 ? (
              <img 
                src={retailer.photos[0]} 
                alt={retailer.companyName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/200x200?text=Image+Not+Available';
                }}
              />
            ) : (
              <div className="text-neutral-400 text-sm p-2 text-center">No images available</div>
            )}
          </div>
        </div>
        </div>
      </motion.div>

      {isModalOpen && (
        <RetailerModal 
          retailer={retailer} 
          onClose={closeModal} 
        />
      )}
    </>
  );
};

export default RetailerCard;