import React from 'react';
import { MapPin } from 'lucide-react';

const RetailerCard = ({ retailer }) => {
  return (
    <div
      className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.02] cursor-pointer border border-slate-100 h-80"
    >
      <div className="flex h-full">
        {/* Left Side - Details */}
        <div className="flex-1 p-6 space-y-3 flex flex-col justify-start pt-6 min-w-0">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
            {retailer.companyName}
          </h3>
          
          <div className="flex items-center gap-2 text-slate-600">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">{retailer.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
              {retailer.type}
            </span>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <p className="text-sm text-slate-700 font-medium">
              {retailer.phoneNumber}
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-48 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 relative overflow-hidden flex-shrink-0 rounded-lg m-2 border border-white/30">
          <div className="absolute inset-0 flex items-center justify-center">
            {retailer.photos ? (
              <img 
                src={`/${retailer.photos}`} 
                alt={retailer.companyName}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-28 h-28 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-indigo-600">
                  {retailer.companyName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerCard;