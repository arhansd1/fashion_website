import React from 'react';
import { Search, MapPin, Users, Briefcase, TrendingUp, Sparkles } from 'lucide-react';

const HomePage = ({ setCurrentTab }) => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="pt-20 pb-20 px-6 w-full">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-700 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Connecting Fashion Students with Real Opportunities
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Turn Your Fashion Skills Into
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Real Experience</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Bridge the gap between classroom and career. Connect with local retailers, 
                work on real projects, and earn money while building your portfolio.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setCurrentTab('retailers')}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30"
                >
                  Find Retailers
                </button>
                <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-slate-300 hover:bg-slate-50 transition">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-slate-900">150+</div>
                  <div className="text-sm text-slate-600">Active Retailers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">Students Matched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">₹2.5L+</div>
                  <div className="text-sm text-slate-600">Earned by Students</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white col-span-2 transform hover:-translate-y-1 transition cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm opacity-90">Featured Opportunity</div>
                      <div className="font-semibold">Visual Merchandising Assistant</div>
                    </div>
                  </div>
                  <div className="text-sm opacity-90">Fashion Boutique • Mumbai</div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold">₹15,000/month</span>
                    <span className="px-3 py-1 bg-white/20 rounded-lg text-sm">Part-time</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 transform hover:-translate-y-1 transition cursor-pointer">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="font-semibold text-slate-900 mb-1">Local First</div>
                  <div className="text-sm text-slate-600">Find opportunities near you</div>
                </div>

                {/* Card 3 */}
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 transform hover:-translate-y-1 transition cursor-pointer">
                  <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center mb-3">
                    <TrendingUp className="w-5 h-5 text-pink-600" />
                  </div>
                  <div className="font-semibold text-slate-900 mb-1">Earn & Learn</div>
                  <div className="text-sm text-slate-600">Get paid for real work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Three simple steps to kickstart your fashion career</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Browse & Filter</h3>
              <p className="text-slate-600 leading-relaxed">
                Search for retailers by location, specialty, and opportunity type. Find the perfect match for your skills and interests.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Connect & Apply</h3>
              <p className="text-slate-600 leading-relaxed">
                Reach out directly to retailers, share your portfolio, and express your interest in working together on real projects.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Work & Grow</h3>
              <p className="text-slate-600 leading-relaxed">
                Complete tasks, earn money, build your portfolio, and gain invaluable real-world experience in the fashion industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join hundreds of fashion students already gaining real-world experience
            </p>
            <button 
              onClick={() => setCurrentTab('retailers')}
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30"
            >
              Explore Retailers Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;