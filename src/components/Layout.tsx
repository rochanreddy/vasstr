import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './layout/Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 pt-20">
        <Outlet /> {/* This is where the routed page components will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 