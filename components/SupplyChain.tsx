import React from 'react';
import { Sprout, Truck, Store, Database, TrendingUp, ShieldCheck, Clock, Map, BarChart3, Activity } from 'lucide-react';

export const SupplyChain: React.FC = () => {
  return (
    <section className="py-24 bg-codGray text-white relative overflow-hidden">
      {/* Background Tech Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-techGreen to-transparent" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-techGreen to-transparent delay-75" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-techGreen to-transparent delay-150" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-techGreen font-mono text-xs tracking-widest uppercase mb-4 block">The Ecosystem</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Correlating Supply & Demand</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
            A unified operating system synchronizing the three pillars of the agricultural trade. 
            Real-time data flow ensures zero friction between harvest and home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-10 -translate-y-1/2"></div>

          {/* Role 1: Farmers (Green) */}
          <div className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-2xl hover:border-techGreen transition-colors duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-techGreen/5 rounded-full blur-3xl group-hover:bg-techGreen/10 transition-colors"></div>
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Sprout size={100} />
            </div>
            
            <div className="w-14 h-14 bg-codGray rounded-xl border border-gray-700 flex items-center justify-center mb-6 group-hover:bg-techGreen group-hover:border-techGreen transition-all duration-300 z-10">
              <Sprout size={28} className="text-gray-300 group-hover:text-white" />
            </div>
            
            <h3 className="text-2xl font-display font-bold mb-1 relative z-10">Farmers</h3>
            <p className="text-xs font-mono text-techGreen mb-6 uppercase tracking-widest relative z-10">The Source</p>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
               Digitizing orchards to predict yield quality. We replace market uncertainty with guaranteed rates and instant payments based on objective grading.
            </p>

            <div className="space-y-6 border-t border-gray-800 pt-6 relative z-10">
                <div>
                    <h4 className="text-xs font-bold text-gray-300 uppercase mb-3 flex items-center gap-2">
                        <ShieldCheck size={14} className="text-techGreen"/> Key Benefits
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-techGreen/50 rounded-full mt-2"></span>
                            <span>Up to 15% revenue increase</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-techGreen/50 rounded-full mt-2"></span>
                            <span>Zero-delay payment cycle</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-gray-300 uppercase mb-3 flex items-center gap-2">
                         <Activity size={14} className="text-techGreen"/> Data Stream
                    </h4>
                     <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-[10px] font-mono text-gray-400 group-hover:border-techGreen/30 transition-colors">Yield Prediction</span>
                        <span className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-[10px] font-mono text-gray-400 group-hover:border-techGreen/30 transition-colors">Soil Health</span>
                        <span className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-[10px] font-mono text-gray-400 group-hover:border-techGreen/30 transition-colors">Grade Analysis</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Role 2: Logistics Partner (Gold) */}
          <div className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-2xl hover:border-harvestGold transition-colors duration-300 group flex flex-col h-full relative overflow-hidden">
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-harvestGold/5 rounded-full blur-3xl group-hover:bg-harvestGold/10 transition-colors"></div>
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Truck size={100} />
            </div>

            <div className="w-14 h-14 bg-codGray rounded-xl border border-gray-700 flex items-center justify-center mb-6 group-hover:bg-harvestGold group-hover:border-harvestGold transition-all duration-300 z-10">
              <Truck size={28} className="text-gray-300 group-hover:text-white" />
            </div>
            
            <h3 className="text-2xl font-display font-bold mb-1 relative z-10">Logistics</h3>
            <p className="text-xs font-mono text-harvestGold mb-6 uppercase tracking-widest relative z-10">The Transit</p>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
              Smart routing algorithms that match vehicle capacity with harvest volume. Minimizing idle time and maximizing cold-chain integrity.
            </p>

             <div className="space-y-6 border-t border-gray-800 pt-6 relative z-10">
                <div>
                    <h4 className="text-xs font-bold text-gray-300 uppercase mb-3 flex items-center gap-2">
                        <Clock size={14} className="text-harvestGold"/> Key Benefits
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-harvestGold/50 rounded-full mt-2"></span>
                            <span>Consistent high-volume loads</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-harvestGold/50 rounded-full mt-2"></span>
                            <span>&lt; 24h turnaround guarantee</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-gray-300 uppercase mb-3 flex items-center gap-2">
                         <Map size={14} className="text-harvestGold"/> Data Stream
                    </h4>
                     <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-[10px] font-mono text-gray-400 group-hover:border-harvestGold/30 transition-colors">Route Optimization</span>
                        <span className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-[10px] font-mono text-gray-400 group-hover:border-harvestGold/30 transition-colors">Temp Logs</span>
                        <span className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-[10px] font-mono text-gray-400 group-hover:border-harvestGold/30 transition-colors">Fleet Utilization</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Role 3: Vendors (Blue) */}
          <div className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-2xl hover:border-blue-500 transition-colors duration-300 group flex flex-col h-full relative overflow-hidden">
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Store size={100} />
            </div>

            <div className="w-14 h-14 bg-codGray rounded-xl border border-gray-700 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300 z-10">
              <Store size={28} className="text-gray-300 group-hover:text-white" />
            </div>
            
            <h3 className="text-2xl font-display font-bold mb-1 relative z-10">Vendors</h3>
            <p className="text-xs font-mono text-blue-500 mb-6 uppercase tracking-widest relative z-10">The Demand</p>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
               Access a live inventory of digitally graded produce. Order exactly what sells, reducing shelf wastage and ensuring customer satisfaction.
            </p>

             <div className="space-y-6 border-t border-gray-800 pt-6 relative z-10">
                <div>
                    <h4 className="text-xs font-bold text-gray-300 uppercase mb-3 flex items-center gap-2">
                        <TrendingUp size={14} className="text-blue-500"/> Key Benefits
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-blue-500/50 rounded-full mt-2"></span>
                            <span>Grade-A quality consistency</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-blue-500/50 rounded-full mt-2"></span>
                            <span>Real-time market pricing</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-gray-300 uppercase mb-3 flex items-center gap-2">
                         <BarChart3 size={14} className="text-blue-500"/> Data Stream
                    </h4>
                     <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-[10px] font-mono text-gray-400 group-hover:border-blue-500/30 transition-colors">Demand Signal</span>
                        <span className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-[10px] font-mono text-gray-400 group-hover:border-blue-500/30 transition-colors">Inventory Levels</span>
                        <span className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-[10px] font-mono text-gray-400 group-hover:border-blue-500/30 transition-colors">Price Trends</span>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};