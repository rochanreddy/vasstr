import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavigationProps = {
  layout?: 'desktop' | 'mobile';
};

const Navigation = ({ layout = 'desktop' }: NavigationProps) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Bid', path: '/bid' },
    { name: 'Cart', path: '/cart' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Vasstr Info', path: '/vasstr-info' },
  ];

  if (layout === 'mobile') {
    return (
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`group relative py-2 ${
                isActive ? 'text-primary' : 'text-black-700'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            className={`relative group py-2 ${
              isActive ? 'text-primary' : 'text-black-700'
            }`}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
              {item.name}
            </span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`} />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;