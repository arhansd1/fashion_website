import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { hoverScaleSmall } from '../utils/PresetMotions';

const RetailerCard = ({ retailer }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      className="group bg-white/70 backdrop-blur-2xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-white/30 h-80"
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

          <div className="pt-2 border-t border-neutral-200/50">
            <p className="text-sm text-neutral-700 font-medium">
              {retailer.phoneNumber}
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-48 bg-neutral-100/50 relative overflow-hidden flex-shrink-0 rounded-lg m-2 border border-neutral-200/50">
          <div className="absolute inset-0 flex items-center justify-center">
            {retailer.photos ? (
              <img 
                src={`/${retailer.photos}`} 
                alt={retailer.companyName}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-28 h-28 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-neutral-700">
                  {retailer.companyName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RetailerCard;