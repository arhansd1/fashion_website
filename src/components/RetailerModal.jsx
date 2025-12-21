import React, { useState, useEffect } from 'react';
import {
  X, ChevronLeft, ChevronRight, MapPin, Phone,
  Mail, Globe, Instagram, Info, Star,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CopyButton from '../utils/CopyButton';

const RetailerModal = ({ retailer, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const nextImage = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrentImageIndex((prev) =>
      prev === retailer.photos.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrentImageIndex((prev) =>
      prev === 0 ? retailer.photos.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToImage = (index) => {
    if (isAnimating || index === currentImageIndex) return;
    setDirection(index > currentImageIndex ? 1 : -1);
    setIsAnimating(true);
    setCurrentImageIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  if (!retailer) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >

        {/* MAIN MODAL */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          className="bg-white/90 backdrop-blur-2xl rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >

          {/* HEADER */}
          <div className="p-6 pb-3 flex justify-between items-start border-b border-neutral-200/60">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                {retailer.companyName}
              </h2>
              <div className="flex items-center mt-1 text-neutral-600">
                <MapPin className="w-4 h-4 mr-1.5" />
                <span className="text-sm">{retailer.location}</span>

                {retailer.Rating && (
                  <div className="ml-3 flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    <span className="text-sm font-medium">{retailer.Rating}</span>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-100 transition"
            >
              <X className="w-6 h-6 text-neutral-500" />
            </button>
          </div>

          {/* BODY (Responsive layout) */}
          <div className="flex flex-col md:flex-row w-full h-full">

            {/* LEFT PANEL — DETAILS */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">

              {/* Contact Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-neutral-900 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-blue-600" />
                  Contact Information
                </h3>

                {retailer.phoneNumber && (
                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border shadow-sm">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-neutral-500 mr-2" />
                      <span className="text-sm font-medium text-neutral-700">
                        {retailer.phoneNumber}
                      </span>
                    </div>
                    <CopyButton text={retailer.phoneNumber} />
                  </div>
                )}

                {retailer.email && (
                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border shadow-sm">
                    <div className="flex items-center overflow-hidden">
                      <Mail className="w-4 h-4 text-neutral-500 mr-2" />
                      <span className="text-sm font-medium text-neutral-700 truncate max-w-[220px]">
                        {retailer.email}
                      </span>
                    </div>
                    <CopyButton text={retailer.email} />
                  </div>
                )}

                {retailer.Website && (
                  <div className="flex items-center bg-white p-3 rounded-xl border shadow-sm">
                    <Globe className="w-4 h-4 text-neutral-500 mr-2" />
                    <a
                      href={
                        retailer.Website.startsWith('http')
                          ? retailer.Website
                          : `https://${retailer.Website}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:underline truncate"
                    >
                      {retailer.Website}
                    </a>
                  </div>
                )}

                {retailer.instaLinks && (
                  <div className="flex items-center bg-white p-3 rounded-xl border shadow-sm">
                    <Instagram className="w-4 h-4 text-neutral-500 mr-2" />
                    <a
                      href={
                        retailer.instaLinks.startsWith('http')
                          ? retailer.instaLinks
                          : `https://instagram.com/${retailer.instaLinks}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-pink-600 hover:underline"
                    >
                      View on Instagram
                    </a>
                  </div>
                )}
              </div>

              {/* Address */}
              {retailer.exactAdress && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-900 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Address
                  </h3>
                  <div className="bg-white p-3 rounded-xl border shadow-sm">
                    <p className="text-sm text-neutral-700 leading-5">
                      {retailer.exactAdress}
                    </p>
                  </div>
                </div>
              )}

              {/* Description */}
              {retailer.Description && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-900">About</h3>
                  <div className="bg-white p-3 rounded-xl border shadow-sm">
                    <p className="text-sm text-neutral-700 leading-6">
                      {retailer.Description}
                    </p>
                  </div>
                </div>
              )}

              {/* Additional Info */}
              {retailer['Additional Info'] && (
                <div>
                  <button
                    onClick={() => setShowMoreInfo(!showMoreInfo)}
                    className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    {showMoreInfo ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-1" /> Hide Additional Information
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-1" /> Show Additional Information
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {showMoreInfo && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-2"
                      >
                        <div className="bg-white p-3 rounded-xl border shadow-sm">
                          <p className="text-sm text-neutral-700 whitespace-pre-line">
                            {retailer['Additional Info']}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* RIGHT PANEL — IMAGE CAROUSEL */}
            <div className="md:w-[45%] w-full h-[500px] md:h-[650px] relative p-4">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-white flex items-center justify-center">
                {retailer.photos?.length > 0 ? (
                  <>
                    <div className="w-full h-full flex items-center justify-center relative">
                      <AnimatePresence mode="wait" custom={direction}>
                        <motion.img
                          key={currentImageIndex}
                          src={retailer.photos[currentImageIndex]}
                          alt={retailer.companyName}
                          className="absolute max-w-full max-h-full object-contain"
                          custom={direction}
                          initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0.8 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={direction => ({
                            x: direction > 0 ? '-100%' : '100%',
                            opacity: 0.8,
                            position: 'absolute'
                          })}
                          transition={{ 
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Available';
                          }}
                        />
                      </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    {retailer.photos.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                          {retailer.photos.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => goToImage(idx)}
                              className={`h-2 rounded-full transition-all ${
                                idx === currentImageIndex
                                  ? "w-6 bg-blue-600"
                                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
                              }`}
                              aria-label={`Go to image ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-400 bg-neutral-50">
                    <div className="text-center p-6">
                      <div className="text-4xl mb-2">🖼️</div>
                      <p>No Image Available</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RetailerModal;
