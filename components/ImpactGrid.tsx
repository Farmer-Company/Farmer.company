import React from 'react';
import { Wallet, Leaf, RefreshCw } from 'lucide-react';

export const ImpactGrid: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-wildSand">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl mb-4 text-codGray">The Efficiency Engine</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Traditional agriculture loses value at every step. The Farmer Company's precision tech captures that value
            and redistributes it to the people who grow our food.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Wastage */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                <Leaf size={24} />
              </div>
              <span className="text-xs font-mono text-gray-400 uppercase">Wastage Reduction</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-display font-bold text-codGray">2%</span>
                <span className="text-lg text-gray-400 line-through decoration-red-400">20%</span>
              </div>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                Industry average wastage is 20%. Our predictive grading reduces this to under 2% by matching supply to exact demand before harvest.
              </p>
            </div>
          </div>

          {/* Card 2: Revenue */}
          <div className="bg-codGray p-8 rounded-2xl shadow-sm border border-gray-800 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-techGreen/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="p-3 bg-white/10 text-techGreen rounded-xl backdrop-blur-sm">
                <Wallet size={24} />
              </div>
              <span className="text-xs font-mono text-gray-400 uppercase">Farmer Revenue</span>
            </div>
            <div className="relative z-10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-display font-bold text-white">+15%</span>
              </div>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                By removing intermediaries and grading objectively, farmers earn significantly more for their premium produce.
              </p>
            </div>
          </div>

          {/* Card 3: Speed */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 bg-blue-50 text-blue-500 rounded-xl">
                <RefreshCw size={24} />
              </div>
              <span className="text-xs font-mono text-gray-400 uppercase">Cycle Time</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-display font-bold text-codGray">3x</span>
                <span className="text-lg text-gray-400 font-light">Faster</span>
              </div>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                From orchard to retail shelf in record time. Freshness preserved through data-driven logistics routing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
