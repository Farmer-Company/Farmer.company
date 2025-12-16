import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-cod-gray text-wild-sand py-12 border-t border-wild-sand/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold tracking-tighter">THE FARMERS COMPANY</span>
          <p className="text-xs text-wild-sand/40 mt-1">© 2025 The Farmers Company. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 text-sm text-wild-sand/60">
          <Link to="/privacy" className="hover:text-danube-blue transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-danube-blue transition-colors">Terms</Link>
          <Link to="/contact" className="hover:text-danube-blue transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};
