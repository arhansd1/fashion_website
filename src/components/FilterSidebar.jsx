import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronDown, ChevronUp } from 'lucide-react';

const FilterSidebar = ({
  searchQuery,
  setSearchQuery,
  selectedLocation,
  setSelectedLocation,
  selectedType,
  setSelectedType,
  locations = [],
  types = [],
  filteredRetailersCount = 0
}) => {
  const [openType, setOpenType] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [locationQuery, setLocationQuery] = useState("");

  const filteredLocations = locations.filter(loc => 
    loc.toLowerCase().includes(locationQuery.toLowerCase())
  );

  return (
    <motion.div 
      className="w-80 h-[calc(100%-2rem)] bg-white/80 backdrop-blur-2xl border border-black/900 rounded-2xl m-4 p-6 pt-12 flex flex-col"
    >
      <h2 className="text-xl font-bold text-neutral-900 mb-6">Filters</h2>
      
      {/* Search by Company Name */}
      <div className="mb-8">
        <div className="font-semibold text-neutral-700 mb-2">Search Companies</div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-neutral-400" />
          </div>
          <input
            type="text"
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent bg-white/80 transition-all"
            placeholder="Search by company name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Location Dropdown */}
      <div className="mb-6">
        <button
          onClick={() => setOpenLocation(!openLocation)}
          className="flex items-center justify-between w-full text-left font-semibold text-neutral-700 py-2"
        >
          Location
          {openLocation ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        <AnimatePresence>
          {openLocation && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-3 space-y-3"
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-neutral-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search location..."
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent bg-white/80"
                />
              </div>

              <div className="max-h-48 overflow-y-auto border border-neutral-200 rounded-lg bg-white/80">
                {filteredLocations.map((loc) => (
                  <div
                    key={loc}
                    onClick={() => {
                      setSelectedLocation(loc);
                      setOpenLocation(false);
                    }}
                    className={`px-4 py-2 cursor-pointer text-sm hover:bg-neutral-100/50 transition-colors ${
                      selectedLocation === loc
                        ? "bg-neutral-100 text-neutral-900 font-medium"
                        : "text-neutral-700"
                    }`}
                  >
                    {loc.charAt(0).toUpperCase() + loc.slice(1)}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Type Dropdown */}
      <div className="mb-6">
        <button
          onClick={() => setOpenType(!openType)}
          className="flex items-center justify-between w-full text-left font-semibold text-neutral-700 py-2"
        >
          Type
          {openType ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        <AnimatePresence>
          {openType && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-3"
            >
              <div className="border border-neutral-200 rounded-lg bg-white/80">
                {types.map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setOpenType(false);
                    }}
                    className={`px-4 py-2 cursor-pointer text-sm hover:bg-neutral-100/50 transition-colors ${
                      selectedType === type
                        ? "bg-neutral-100 text-neutral-900 font-medium"
                        : "text-neutral-700"
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Retailer Count */}
      <div className="mt-auto pt-4 border-t border-neutral-100">
        <p className="text-sm text-neutral-600">
          Showing{' '}
          <span className="font-semibold text-neutral-900">
            {filteredRetailersCount}
          </span>{' '}
          retailers
        </p>
      </div>
    </motion.div>
  );
};

export default FilterSidebar;
