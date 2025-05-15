import React from 'react';
import Button from '../ui/Button';

type CTASectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image?: string;
  variant?: 'light' | 'dark';
};

const CTASection = ({
  title,
  description,
  buttonText,
  buttonLink,
  image,
  variant = 'light',
}: CTASectionProps) => {
  const bgClass = variant === 'light' ? 'bg-white' : 'bg-gray-900';
  const textClass = variant === 'light' ? 'text-gray-900' : 'text-white';
  const descriptionClass = variant === 'light' ? 'text-gray-600' : 'text-gray-300';

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          {image && (
            <>
              <div className="absolute inset-0">
                <img
                  src={image}
                  alt="CTA background"
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 ${
                    variant === 'light' ? 'bg-black/30' : 'bg-black/50'
                  }`}
                />
              </div>
            </>
          )}

          <div className={`relative py-16 md:py-24 px-6 md:px-12 ${image ? 'text-white' : ''}`}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={`text-3xl md:text-4xl font-serif mb-6 ${image ? 'text-white' : textClass}`}>
                {title}
              </h2>
              <p className={`text-lg mb-8 ${image ? 'text-gray-100' : descriptionClass}`}>
                {description}
              </p>
              <Button href={buttonLink} size="lg">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;