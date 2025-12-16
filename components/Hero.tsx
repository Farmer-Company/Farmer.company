import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-wild-sand flex items-center justify-center">
      {/* Background Gradient/Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-wild-sand to-white z-0" />

      {/* Abstract Background Shape */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-danube-blue/20 to-transparent rounded-full blur-3xl z-0"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity }}
        >
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-cod-gray mb-6">
            The Operating System <br />
            <span className="text-danube-blue">for Agriculture</span>
          </h1>
          <p className="text-xl md:text-2xl text-cod-gray/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            The world's first autonomous supply chain connecting Origin, Exchange, and Logistics in real-time.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link to="/app/auth">
              <Button size="lg" className="group min-w-[200px]">
                Launch Platform
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <div className="flex gap-4 text-sm font-bold text-cod-gray/60">
              <Link to="/app/farmer" className="hover:text-danube-blue transition-colors">FOR FARMERS</Link>
              <span>•</span>
              <Link to="/app/buyer" className="hover:text-danube-blue transition-colors">FOR BUYERS</Link>
              <span>•</span>
              <Link to="/app/logistics" className="hover:text-danube-blue transition-colors">FOR LOGISTICS</Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-10 md:left-20 text-xs font-mono text-cod-gray/40"
      >
        SCROLL TO EXPLORE
      </motion.div>
    </div>
  );
};
