import React, { useState } from 'react';
import { countries, Country } from '../../lib/countries';
import { ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountrySelectProps {
    selectedCountry: Country;
    onSelect: (country: Country) => void;
}

export const CountrySelect: React.FC<CountrySelectProps> = ({ selectedCountry, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCountries = countries.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.dialCode.includes(searchTerm) ||
        c.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-[#1A1A1A] border border-gray-800 rounded-lg px-3 py-4 text-white hover:border-gray-700 transition-colors w-28"
            >
                <span className="text-xl">{selectedCountry.flag}</span>
                <span className="text-sm font-mono text-gray-300">{selectedCountry.dialCode}</span>
                <ChevronDown size={14} className="text-gray-500 ml-auto" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40 bg-black/50"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-72 bg-[#1A1A1A] border border-gray-800 rounded-xl shadow-2xl z-50 overflow-hidden"
                        >
                            <div className="p-2 border-b border-gray-800">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                                    <input
                                        type="text"
                                        placeholder="Search country..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-black/50 border border-gray-800 rounded-lg py-2 pl-9 pr-3 text-sm text-white focus:outline-none focus:border-green-500"
                                        autoFocus
                                    />
                                </div>
                            </div>
                            <div className="max-h-60 overflow-y-auto custom-scrollbar">
                                {filteredCountries.map((country) => (
                                    <button
                                        key={country.code}
                                        type="button"
                                        onClick={() => {
                                            onSelect(country);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors text-left ${selectedCountry.code === country.code ? 'bg-gray-800/50' : ''
                                            }`}
                                    >
                                        <span className="text-xl">{country.flag}</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-white">{country.name}</span>
                                            <span className="text-xs text-gray-500 font-mono">{country.dialCode}</span>
                                        </div>
                                        {selectedCountry.code === country.code && (
                                            <div className="ml-auto w-2 h-2 rounded-full bg-green-500"></div>
                                        )}
                                    </button>
                                ))}
                                {filteredCountries.length === 0 && (
                                    <div className="p-4 text-center text-gray-500 text-sm">No countries found</div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
