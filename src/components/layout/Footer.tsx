import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide">COMPANY</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          {/* Policies */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide">POLICIES</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link to="/returns" className="hover:underline">Returns / Refunds</Link></li>
              <li><Link to="/exchange" className="hover:underline">Exchange Policy</Link></li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide">SUPPORT</h3>
            <ul className="space-y-4">
              <li><Link to="/shipping" className="hover:underline">Shipping</Link></li>
              <li><Link to="/payment" className="hover:underline">Payment</Link></li>
            </ul>
          </div>
          {/* Stay Connected */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide">STAY CONNECTED</h3>
            <div className="flex space-x-6 mt-2">
              <a href="#" aria-label="Instagram" className="hover:text-brand-gold"><Instagram className="h-6 w-6" /></a>
              <a href="#" aria-label="X" className="hover:text-brand-gold"><X className="h-6 w-6" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-brand-gold"><Facebook className="h-6 w-6" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-brand-gold"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <hr className="my-10 border-gray-300 opacity-50" />
        <div className="text-center text-base mt-4">
          © 2025 Vasstr India. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;