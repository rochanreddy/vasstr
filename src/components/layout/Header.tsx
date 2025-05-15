import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Search, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary relative overflow-hidden">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">VASSTR</span>
              <span className="inline-block absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">VASSTR</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Navigation />
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`bg-gray-50 border border-gray-200 rounded-full py-2 pl-10 pr-4 w-36 lg:w-48
                  transition-all duration-300 ease-in-out
                  ${searchFocused 
                    ? 'w-56 lg:w-64 border-primary/30 ring-2 ring-primary/20 bg-white' 
                    : 'focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/30'
                  }`}
              />
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4
                transition-colors duration-300
                ${searchFocused ? 'text-primary' : 'text-gray-400'}`}
              />
            </div>
            <Link 
              to="/account" 
              className="relative group p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            >
              <User className="h-5 w-5 text-gray-700 group-hover:text-primary transition-colors duration-300" />
              <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
              }`}></span>
              <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-x-0 top-[calc(100%+1px)] bg-white shadow-xl transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 pl-10 pr-4 
                  focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 
                  transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
          <Navigation layout="mobile" />
          <div className="mt-6 pt-6 border-t border-gray-100">
            <Link 
              to="/account" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-300 group"
            >
              <User className="h-5 w-5" />
              <span>Account</span>
              <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;