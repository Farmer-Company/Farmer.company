import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display font-bold text-4xl mb-6 text-codGray">Join the Network</h2>
          <p className="text-lg text-gray-500 mb-8 font-light">
            Whether you are a grower looking for fair prices, a buyer seeking quality, or a logistics partner,
            The Farmer Company builds the bridge.
          </p>

          <div className="space-y-8 mt-12">
            <div className="border-l-2 border-codGray pl-6">
              <h4 className="font-bold text-codGray mb-1">Headquarters</h4>
              <p className="text-gray-500 text-sm">Bangalore, India</p>
            </div>
            <div className="border-l-2 border-techGreen pl-6">
              <h4 className="font-bold text-codGray mb-1">Support</h4>
              <p className="text-gray-500 text-sm">hello@thefarmer.company</p>
            </div>
          </div>
        </div>

        <div className="bg-wildSand p-8 rounded-3xl border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500">First Name</label>
                <input type="text" className="w-full bg-white border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-techGreen transition-colors" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Last Name</label>
                <input type="text" className="w-full bg-white border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-techGreen transition-colors" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-gray-500">I am a</label>
              <select className="w-full bg-white border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-techGreen transition-colors text-codGray">
                <option>Farmer / Grower</option>
                <option>Retail Buyer / Vendor</option>
                <option>Logistics Partner</option>
                <option>Investor / Media</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Message</label>
              <textarea className="w-full bg-white border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-techGreen transition-colors h-32" placeholder="How can we help you grow?"></textarea>
            </div>

            <button className="w-full bg-codGray text-white py-4 rounded-xl font-medium hover:bg-techGreen transition-colors duration-300 flex items-center justify-center gap-2 group">
              <span>Send Message</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};