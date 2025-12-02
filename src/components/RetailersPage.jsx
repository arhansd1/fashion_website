import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import RetailerCard from "./RetailerCard";
import retailersData from "../data/retailers.json";
import { X } from 'lucide-react';
import { fadeIn, staggerChildren } from '../utils/PresetMotions';
import FilterSidebar from './FilterSidebar';

const FilterBadge = ({ label, value, onRemove }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium text-neutral-700 border border-neutral-200 shadow-sm hover:shadow transition-all"
  >
    <span className="text-xs text-neutral-500">{label}:</span>
    <span>{value}</span>
    <button 
      onClick={onRemove}
      className="text-neutral-400 hover:text-neutral-600 transition-colors"
      aria-label={`Remove ${label} filter`}
    >
      <X size={14} />
    </button>
  </motion.div>
);

const RetailersPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const activeFilters = useMemo(() => {
    const filters = [];
    if (selectedLocation !== "all") {
      filters.push({ type: 'location', value: selectedLocation });
    }
    if (selectedType !== "all") {
      filters.push({ type: 'type', value: selectedType });
    }
    if (searchQuery) {
      filters.push({ type: 'search', value: searchQuery });
    }
    return filters;
  }, [selectedLocation, selectedType, searchQuery]);
  
  const clearAllFilters = () => {
    setSelectedLocation("all");
    setSelectedType("all");
    setSearchQuery("");
    setLocationQuery("");
  };

  // For dropdown states
  const [openType, setOpenType] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);

  // For location search
  const [locationQuery, setLocationQuery] = useState("");

  const locations = ["all", ...new Set(retailersData.map((r) => r.location))];
  const types = ["all", ...new Set(retailersData.map((r) => r.type))];

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(locationQuery.toLowerCase())
  );

  const filteredRetailers = retailersData.filter((retailer) => {
    const locationMatch =
      selectedLocation === "all" || retailer.location === selectedLocation;
    const typeMatch = selectedType === "all" || retailer.type === selectedType;
    const searchMatch = retailer.companyName.toLowerCase().includes(searchQuery.toLowerCase());
    return locationMatch && typeMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Active Filters Bar */}
      <AnimatePresence>
        {activeFilters.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white/80 backdrop-blur-lg border-b border-neutral-100 px-6 py-3 sticky top-0 z-10"
          >
            <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-neutral-500">Filters:</span>
              <div className="flex flex-wrap gap-2">
                <AnimatePresence>
                  {activeFilters.map((filter) => (
                    <FilterBadge
                      key={`${filter.type}-${filter.value}`}
                      label={
                        filter.type === 'location' ? 'Location' : 
                        filter.type === 'type' ? 'Type' : 'Search'
                      }
                      value={filter.value}
                      onRemove={() => {
                        if (filter.type === 'location') setSelectedLocation('all');
                        else if (filter.type === 'type') setSelectedType('all');
                        else if (filter.type === 'search') setSearchQuery('');
                      }}
                    />
                  ))}
                </AnimatePresence>
              </div>
              <button
                onClick={clearAllFilters}
                className="ml-auto text-sm font-medium text-neutral-600 hover:text-neutral-900 flex items-center gap-1 transition-colors"
              >
                <X size={14} />
                Clear all
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="relative">
        {/* Filter Sidebar - Fixed to left edge */}
        <div className="fixed left-0 top-20 h-[calc(100vh-4rem)] z-10">
          <FilterSidebar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            locations={locations}
            types={types}
            filteredRetailersCount={filteredRetailers.length}
          />
        </div>
        
        {/* Main Content */}
        <div className="lg:pl-80 w-full">
          <div className="w-full px-2 sm:px-6 py-6">
          {/* Mobile Filter - Only shown on small screens */}
          <div className="lg:hidden mb-6">
            <FilterSidebar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              locations={locations}
              types={types}
              filteredRetailersCount={filteredRetailers.length}
            />
          </div>
          
          {/* Retailers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1400px] mx-auto">
            {filteredRetailers.map((retailer) => (
              <RetailerCard key={retailer.id} retailer={retailer} />
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailersPage;