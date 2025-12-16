import React, { useEffect, useState } from 'react';
import { Scan, Activity, Ruler, Droplets } from 'lucide-react';

export const FruitScanner: React.FC = () => {
  const [scanActive, setScanActive] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    // Start scan loop
    const interval = setInterval(() => {
      setScanActive(true);
      setTimeout(() => setStatsVisible(true), 1500); // Show stats halfway
      setTimeout(() => {
        setScanActive(false);
        setStatsVisible(false);
      }, 3000); // Reset
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tech" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 tracking-tight">
            The Eye of The Farmer Company. <br />
            <span className="text-gray-400">We see what others miss.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
            Our proprietary <strong>The Farmer Company Vision Stack™</strong> analyzes 40+ attributes per fruit
            in milliseconds. From sugar content (Brix) to internal structural integrity,
            we grade nature with industrial precision.
          </p>

          <div className="space-y-6">
            {[
              { title: 'Surface Topology', desc: 'Detects micro-abrasions and texture consistency.', icon: <Activity size={20} /> },
              { title: 'Volumetric Analysis', desc: 'Calculates exact displacement and density.', icon: <Ruler size={20} /> },
              { title: 'Internal Chemistry', desc: 'Non-invasive Brix (sugar) and acidity measurement.', icon: <Droplets size={20} /> }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:border-techGreen/30 hover:bg-gray-50 transition-colors group">
                <div className="mt-1 text-gray-400 group-hover:text-techGreen transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-medium text-codGray">{feature.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visualizer */}
        <div className="relative h-[600px] bg-wildSand rounded-3xl overflow-hidden flex items-center justify-center border border-gray-200">
          {/* Grid Overlay */}
          <div className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}>
          </div>

          {/* Apple Image Placeholder - Using a clean red apple image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 z-10 transition-transform duration-700 ease-out hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Premium Grade Apple"
              className="w-full h-full object-contain drop-shadow-2xl"
            />

            {/* Scanning Laser */}
            <div className={`absolute left-0 right-0 h-0.5 bg-techGreen shadow-[0_0_15px_rgba(16,185,129,0.8)] z-20 ${scanActive ? 'animate-scan-vertical' : 'top-0 opacity-0'}`} />

            {/* Floating Data Points */}
            <div className={`absolute top-10 -right-24 md:-right-32 bg-white/90 backdrop-blur border border-techGreen/20 p-3 rounded-lg shadow-sm transition-all duration-500 ${statsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Diameter</div>
              <div className="text-xl font-bold text-codGray">75.4 <span className="text-sm font-normal text-gray-500">mm</span></div>
            </div>

            <div className={`absolute bottom-20 -left-24 md:-left-32 bg-white/90 backdrop-blur border border-techGreen/20 p-3 rounded-lg shadow-sm transition-all duration-500 delay-100 ${statsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Brix (Sugar)</div>
              <div className="text-xl font-bold text-codGray">14.2 <span className="text-sm font-normal text-gray-500">%</span></div>
            </div>

            <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 bg-codGray text-white px-4 py-1 rounded-full text-xs font-mono transition-all duration-300 ${statsVisible ? 'opacity-100 top-0' : 'opacity-0 top-4'}`}>
              GRADE A PREMIUM
            </div>
          </div>

          {/* UI Overlay Elements */}
          <div className="absolute top-6 left-6 flex gap-2">
            <Scan size={20} className="text-techGreen animate-pulse" />
            <span className="font-mono text-xs text-techGreen mt-0.5">SCANNING...</span>
          </div>

          <div className="absolute bottom-6 right-6 text-right">
            <div className="font-mono text-xs text-gray-400">BATCH ID</div>
            <div className="font-mono text-sm text-codGray">VG-2024-X99</div>
          </div>
        </div>
      </div>
    </section>
  );
};
