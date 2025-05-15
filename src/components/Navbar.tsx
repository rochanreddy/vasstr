import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Determine navbar style
  const isTransparent = !isScrolled && !isMobileMenuOpen;
  const navBg = isTransparent ? 'bg-black' : 'bg-brand-white shadow-md';
  const navText = isTransparent ? 'text-white' : 'text-brand-charcoal';
  const navLogo = isTransparent ? 'text-white' : 'text-brand-charcoal';
  const navLinkHover = isTransparent ? 'hover:text-brand-gold' : 'hover:text-brand-gold';

  const navLinkClasses = () =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${navText} ${navLinkHover}`;

  const mobileNavLinkClasses =
    'block px-3 py-2 rounded-md text-base font-medium text-brand-charcoal hover:bg-brand-light-gray hover:text-brand-gold transition-colors';

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${navBg}`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left-side Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4 w-1/3">
          <Link to="/" className={navLinkClasses()}>Home</Link>
          <Link to="/products" className={navLinkClasses()}>Products</Link>
        </div>

        {/* Centered Logo (Desktop & Mobile) */}
        <div className="flex-1 md:flex-none md:w-1/3 text-center md:text-center">
          <Link 
            to="/" 
            className={`text-2xl lg:text-3xl font-bold tracking-widest hover:opacity-80 transition-opacity ${navLogo}`}>
            V A S S T R
          </Link>
        </div>

        {/* Right-side Links (Desktop) */}
        <div className="hidden md:flex items-center justify-end space-x-2 lg:space-x-4 w-1/3">
          <Link to="/vasstr-info" className={navLinkClasses()}>About Us</Link>
          <Link to="/contact" className={navLinkClasses()}>Contact</Link>
        </div>
        
        {/* Mobile Menu Button (Aligned to the right of the logo area on mobile) */}
        <div className="md:hidden flex items-center justify-end ml-auto">
          <button
            onClick={toggleMobileMenu}
            className={`inline-flex items-center justify-center p-2 rounded-md ${navText} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors`}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="md:hidden bg-brand-white shadow-lg overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className={mobileNavLinkClasses}>Home</Link>
              <Link to="/products" className={mobileNavLinkClasses}>Products</Link>
              <Link to="/vasstr-info" className={mobileNavLinkClasses}>About Us</Link>
              <Link to="/contact" className={mobileNavLinkClasses}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 