import React from 'react';
import Button from './Button';

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'light' | 'dark';
};

const Hero = ({
  title,
  subtitle,
  image,
  buttonText,
  buttonLink,
  variant = 'light',
}: HeroProps) => {
  const textColorClass = variant === 'light' ? 'text-gray-900' : 'text-white';
  const subtitleColorClass = variant === 'light' ? 'text-gray-700' : 'text-gray-100';

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 ${
            variant === 'light'
              ? 'bg-white/30 backdrop-blur-[2px]'
              : 'bg-gray-900/40 backdrop-blur-[2px]'
          }`}
        />
      </div>

      <div className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-lg md:max-w-2xl mx-auto text-center">
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 ${textColorClass}`}
              style={{ lineHeight: '1.2' }}
            >
              {title}
            </h1>
            <p className={`text-lg md:text-xl mb-8 ${subtitleColorClass}`}>
              {subtitle}
            </p>
            <Button href={buttonLink} size="lg">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;