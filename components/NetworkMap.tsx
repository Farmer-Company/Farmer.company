import React from 'react';
import { MapPin, Truck, TrendingUp, Users, Package } from 'lucide-react';

export const NetworkMap: React.FC = () => {
  return (
    <section id="network" className="py-24 bg-wildSand text-codGray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="inline-block px-3 py-1 rounded-full border border-codGray/10 text-xs font-mono tracking-widest uppercase text-codGray/60 mb-4">
               Live Operations
            </span>
            <h2 className="font-display font-bold text-4xl mb-4">The Digital Orchard Network</h2>
            <p className="text-gray-500 max-w-lg font-light">
              We've digitized the supply chain, creating a living map of supply and demand. 
              Farmers know what to grow. Buyers know what's available. Real-time.
            </p>
          </div>
          {/* Stats aligned with 3-sided marketplace */}
          <div className="flex gap-8 mt-8 md:mt-0">
            <div className="text-center md:text-left">
              <div className="text-3xl font-display font-bold text-techGreen">200K+</div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Farmers</div>
            </div>
             <div className="text-center md:text-left">
              <div className="text-3xl font-display font-bold text-codGray">12K+</div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Daily Tons</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-display font-bold text-codGray">400+</div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Vendors</div>
            </div>
          </div>
        </div>

        {/* Abstract Map Viz */}
        <div className="relative w-full aspect-[16/9] bg-codGray rounded-2xl border border-gray-200 overflow-hidden group shadow-2xl">
             {/* Map Background Pattern */}
             <div className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: 'radial-gradient(#555 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
             />

             {/* Animated Connection Lines (SVG) */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none">
                 <defs>
                     <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" style={{stopColor:'#10B981', stopOpacity:0}} />
                         <stop offset="50%" style={{stopColor:'#10B981', stopOpacity:0.5}} />
                         <stop offset="100%" style={{stopColor:'#10B981', stopOpacity:0}} />
                     </linearGradient>
                 </defs>
                 
                 {/* Connection 1 */}
                 <path d="M200,400 Q400,300 600,200" fill="none" stroke="url(#grad1)" strokeWidth="1" className="opacity-40">
                    <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="3s" repeatCount="indefinite" />
                 </path>
                 
                 {/* Connection 2 */}
                 <path d="M300,500 Q500,400 800,300" fill="none" stroke="url(#grad1)" strokeWidth="1" className="opacity-30">
                    <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="4s" repeatCount="indefinite" />
                 </path>
             </svg>

             {/* Nodes representing the 3 profiles */}
             {[
                 { x: '20%', y: '60%', name: 'Nashik (Farms)', type: 'farmer' },
                 { x: '70%', y: '30%', name: 'Delhi (Vendor)', type: 'vendor' },
                 { x: '45%', y: '50%', name: 'Indore (Hub)', type: 'logistics' },
                 { x: '80%', y: '70%', name: 'Kolkata (Vendor)', type: 'vendor' },
             ].map((node, i) => (
                 <div 
                    key={i} 
                    className="absolute -translate-x-1/2 -translate-y-1/2 group/node cursor-pointer"
                    style={{ left: node.x, top: node.y }}
                >
                     <div className={`w-3 h-3 rounded-full ${node.type === 'farmer' ? 'bg-techGreen' : node.type === 'logistics' ? 'bg-harvestGold' : 'bg-white'} animate-pulse`} />
                     <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap bg-black/90 px-3 py-1.5 rounded text-xs border border-white/20 text-white shadow-lg z-20">
                         {node.name}
                     </div>
                     {/* Radar ping effect */}
                     <div className={`absolute inset-0 rounded-full ${node.type === 'farmer' ? 'bg-techGreen' : 'bg-white'} opacity-20 animate-ping`} />
                 </div>
             ))}

             {/* Map Overlay Stats */}
             <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur border border-white/10 p-4 rounded-lg flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-techGreen"></div>
                    <span className="text-xs font-mono text-gray-300">Active Harvests</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-harvestGold"></div>
                    <span className="text-xs font-mono text-gray-300">Fleet in Transit</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-xs font-mono text-gray-300">Vendor Demand</span>
                </div>
             </div>

             <div className="absolute top-6 right-6 bg-black/50 backdrop-blur border border-white/10 p-4 rounded-lg w-64">
                 <div className="flex items-center gap-3 mb-3 border-b border-white/10 pb-2">
                     <TrendingUp size={16} className="text-techGreen" />
                     <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Demand Signal</span>
                 </div>
                 <div className="space-y-2">
                     <div className="flex justify-between text-sm text-gray-200">
                         <span>Apples (Kashmir)</span>
                         <span className="text-techGreen">+12%</span>
                     </div>
                     <div className="flex justify-between text-sm text-gray-200">
                         <span>Pomegranates</span>
                         <span className="text-techGreen">+8%</span>
                     </div>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};