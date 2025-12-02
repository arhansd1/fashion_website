import React from 'react';
import { Search, MapPin, Users, Briefcase, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  fadeInUpDelayed, 
  fadeInScaleDelayed, 
  hoverLift, 
  hoverScale,
  blobAnimation,
  fadeInUpOnView 
} from '../utils/PresetMotions';

const HomePage = ({ setCurrentTab }) => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-x-hidden">
      {/* Hero Section */}
      <div className="pt-20 pb-20 w-full px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
        <div className="w-full">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 xl:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 w-full">
              <motion.div 
                {...fadeInUpDelayed(0.2)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-lg border border-white/30 rounded-full text-neutral-700 text-sm font-medium shadow-lg shadow-neutral-900/5"
              >
                <Sparkles className="w-4 h-4" />
                Connecting Fashion Students with Real Opportunities
              </motion.div>
              
              <motion.h1 
                {...fadeInUpDelayed(0.3)}
                className="text-6xl lg:text-7xl font-black text-neutral-900 leading-[1.1] tracking-tight"
              >
                Turn Your Fashion Skills Into
                <span className="block mt-2 bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 bg-clip-text text-transparent"> Real Experience</span>
              </motion.h1>
              
              <motion.p 
                {...fadeInUpDelayed(0.4)}
                className="text-2xl text-neutral-600 leading-relaxed max-w-2xl"
              >
                Bridge the gap between classroom and career. Connect with local retailers, 
                work on real projects, and earn money while building your portfolio.
              </motion.p>

              <motion.div 
                {...fadeInUpDelayed(0.5)}
                className="flex flex-wrap gap-6 mt-6"
              >
                <button 
                  onClick={() => setCurrentTab('retailers')}
                  className="px-10 py-5 bg-neutral-900 text-white text-lg rounded-xl font-semibold hover:bg-neutral-800 transition shadow-lg shadow-neutral-900/10"
                >
                  Find Retailers
                </button>
                <button className="px-10 py-5 bg-white/60 backdrop-blur-xl border border-neutral-200/50 text-neutral-700 text-lg rounded-xl font-semibold hover:bg-white/80 hover:border-neutral-300/50 transition shadow-sm">
                  Learn More
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                {...fadeInUpDelayed(0.6)}
                className="flex flex-wrap gap-8 pt-4"
              >
                <div>
                  <div className="text-3xl font-bold text-neutral-900">150+</div>
                  <div className="text-sm text-neutral-500">Active Retailers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neutral-900">500+</div>
                  <div className="text-sm text-neutral-500">Students Matched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neutral-900">₹2.5L+</div>
                  <div className="text-sm text-neutral-500">Earned by Students</div>
                </div>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div 
              {...fadeInScaleDelayed(0.2)}
              className="relative w-full"
            >
              <div className="relative w-full grid grid-cols-2 gap-4 sm:gap-6">
                {/* Animated background elements */}
                <motion.div 
                  className="absolute -z-10 w-64 h-64 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob top-1/4 -left-10"
                  {...blobAnimation(10, 0)}
                />
                <motion.div 
                  className="absolute -z-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob top-1/3 right-10"
                  {...blobAnimation(12, 1)}
                />
                <motion.div 
                  className="absolute -z-10 w-80 h-80 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob bottom-1/4 left-1/4"
                  {...blobAnimation(15, 2)}
                />

                {/* Card 1 - Featured */}
                <motion.div 
                  {...hoverLift}
                  {...fadeInUpDelayed(0.3)}
                  className="bg-white/80 backdrop-blur-xl border border-neutral-200/50 rounded-2xl p-6 col-span-2 cursor-pointer shadow-xl shadow-neutral-900/10 hover:shadow-2xl hover:shadow-neutral-900/20 transition-all duration-300 hover:scale-[1.01] w-full"
                >
                  <div className="flex gap-6 items-center">
                    <div className="w-12 h-12 bg-neutral-100/80 backdrop-blur-xl rounded-xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-neutral-900" />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500">Featured Opportunity</div>
                      <div className="font-semibold text-neutral-900">Visual Merchandising Assistant</div>
                    </div>
                  </div>
                  <div className="text-sm text-neutral-600">Fashion Boutique • Mumbai</div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-neutral-900">₹15,000/month</span>
                    <span className="px-3 py-1 bg-neutral-100/80 backdrop-blur-xl rounded-lg text-sm text-neutral-700">Part-time</span>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                  {...hoverLift}
                  {...fadeInUpDelayed(0.4)}
                  className="bg-white/80 backdrop-blur-2xl border border-neutral-200/50 rounded-2xl p-6 cursor-pointer shadow-lg shadow-neutral-900/5 hover:shadow-xl hover:shadow-neutral-900/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-xl rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div className="font-semibold text-lg text-neutral-900 mb-1">Local First</div>
                  <div className="text-sm text-neutral-600">Find opportunities near you</div>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                  {...hoverLift}
                  {...fadeInUpDelayed(0.5)}
                  className="bg-white/80 backdrop-blur-2xl border border-neutral-200/50 rounded-2xl p-6 cursor-pointer shadow-lg shadow-neutral-900/5 hover:shadow-xl hover:shadow-neutral-900/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-xl rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div className="font-semibold text-lg text-neutral-900 mb-1">Earn & Learn</div>
                  <div className="text-sm text-neutral-600">Get paid for real work</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-28 px-4 sm:px-6 lg:px-8 bg-neutral-50/50 backdrop-blur-lg border-b border-neutral-100">
        <div className="w-full">
          <motion.div 
            {...fadeInUpDelayed(0)}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-neutral-900 mb-6 tracking-tight">How It Works</h2>
            <p className="text-2xl text-neutral-600">Three simple steps to kickstart your fashion career</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div 
              {...fadeInUpOnView(0.1)}
              className="h-full bg-white/90 backdrop-blur-xl rounded-2xl p-10 border border-neutral-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/10 hover:scale-[1.02] flex flex-col"
            >
              <div className="w-14 h-14 bg-white/80 backdrop-blur-xl rounded-xl flex items-center justify-center mb-8 shadow-sm">
                <Search className="w-6 h-6 text-neutral-900" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">1. Browse & Filter</h3>
              <p className="text-neutral-600 leading-relaxed mt-2">
                Search for retailers by location, specialty, and opportunity type. Find the perfect match for your skills and interests.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUpOnView(0.1)}
              className="h-full bg-white/90 backdrop-blur-xl rounded-2xl p-10 border border-neutral-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/10 hover:scale-[1.02] flex flex-col"
            >
              <div className="w-14 h-14 bg-white/80 backdrop-blur-xl rounded-xl flex items-center justify-center mb-8 shadow-sm">
                <Users className="w-6 h-6 text-neutral-900" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">2. Connect & Apply</h3>
              <p className="text-neutral-600 leading-relaxed mt-2">
                Reach out directly to retailers, share your portfolio, and express your interest in working together on real projects.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUpOnView(0.1)}
              className="h-full bg-white/90 backdrop-blur-xl rounded-2xl p-10 border border-neutral-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/10 hover:scale-[1.02] flex flex-col"
            >
              <div className="w-14 h-14 bg-white/80 backdrop-blur-xl rounded-xl flex items-center justify-center mb-8 shadow-sm">
                <Briefcase className="w-6 h-6 text-neutral-900" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">3. Work & Grow</h3>
              <p className="text-neutral-600 leading-relaxed mt-2">
                Complete tasks, earn money, build your portfolio, and gain invaluable real-world experience in the fashion industry.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 px-8 bg-gradient-to-br from-neutral-50 to-neutral-50">
        <motion.div 
          {...fadeInUpOnView(0)}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-white/90 backdrop-blur-xl border border-neutral-200/50 rounded-3xl p-16 shadow-2xl shadow-neutral-900/10 hover:shadow-3xl hover:shadow-neutral-900/20 transition-all duration-300 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-neutral-600 mb-8">
              Join hundreds of fashion students already gaining real-world experience
            </p>
            <motion.button 
              {...hoverScale}
              onClick={() => setCurrentTab('retailers')}
              className="px-8 py-4 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-neutral-900/30 transition-all duration-300"
            >
              Explore Retailers Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;