import React, { useState } from "react";
import RetailerCard from "./RetailerCard";
import retailersData from "../data/retailers.json";
import { Search } from 'lucide-react';

const RetailersPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className="min-h-screen bg-neutral-50">
      <div className="flex">
        {/* FILTER SIDEBAR */}
        <div className="w-80 min-h-screen bg-white/70 backdrop-blur-2xl shadow-lg border-r border-neutral-200/50 px-6 py-8 sticky top-0">
          <h2 className="text-xl font-bold text-neutral-900 mb-6">Filters</h2>
          
          {/* Search by Company Name */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-neutral-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-9 pr-4 py-2.5 border border-neutral-200/50 rounded-lg text-sm placeholder-neutral-400 focus:outline-none focus:border-indigo-500 bg-white/50 backdrop-blur-xl hover:bg-white/70 transition-colors"
                placeholder="Search by company name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* ********** LOCATION DROPDOWN ********** */}
          <div className="mb-8">
            <button
              onClick={() => setOpenLocation(!openLocation)}
              className="flex items-center justify-between w-full text-left font-semibold text-neutral-700 py-2"
            >
              Location
              <svg 
                className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${openLocation ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openLocation && (
              <div className="mt-3 space-y-3">
                {/* Search Bar */}
                <input
                  type="text"
                  placeholder="Search location..."
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-neutral-200/50 text-sm focus:outline-none focus:border-indigo-500 bg-white/50 backdrop-blur-xl"
                />

                {/* Dropdown List */}
                <div className="border border-neutral-200/50 rounded-md max-h-40 overflow-y-auto bg-white/50 backdrop-blur-xl">
                  {filteredLocations.map((loc) => (
                    <div
                      key={loc}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setOpenLocation(false);
                      }}
                      className={`px-3 py-2 cursor-pointer text-sm hover:bg-neutral-100/50 ${
                        selectedLocation === loc
                          ? "bg-indigo-50 text-indigo-600 font-medium"
                          : "text-neutral-700"
                      }`}
                    >
                      {loc.charAt(0).toUpperCase() + loc.slice(1)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ********** TYPE DROPDOWN ********** */}
          <div className="mb-8">
            <button
              onClick={() => setOpenType(!openType)}
              className="flex items-center justify-between w-full text-left font-semibold text-neutral-700 py-2"
            >
              Type
              <svg 
                className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${openType ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openType && (
              <div className="mt-3 border rounded-md border-neutral-200/50 bg-white/50 backdrop-blur-xl">
                {types.map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setOpenType(false);
                    }}
                    className={`px-3 py-2 cursor-pointer text-sm hover:bg-neutral-100/50 ${
                      selectedType === type
                        ? "bg-indigo-50 text-indigo-600 font-medium"
                        : "text-neutral-700"
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Count */}
          <div className="pt-4 border-t border-neutral-200/50">
            <p className="text-sm text-neutral-600">
              Showing{" "}
              <span className="font-semibold text-indigo-600">
                {filteredRetailers.length}
              </span>{" "}
              retailers
            </p>
          </div>
        </div>

        {/* RIGHT SIDE — GRID */}
        <div className="flex-1 py-12 px-8 pr-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredRetailers.map((retailer) => (
              <RetailerCard key={retailer.id} retailer={retailer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailersPage;