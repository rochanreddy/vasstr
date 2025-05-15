import React from 'react';

type AboutSectionProps = {
  variant?: 'light' | 'dark';
};

const AboutSection = ({ variant = 'light' }: AboutSectionProps) => {
  const bgClass = variant === 'light' ? 'bg-white' : 'bg-gray-900';
  const textClass = variant === 'light' ? 'text-gray-800' : 'text-white';
  const headingClass = variant === 'light' ? 'text-gray-900' : 'text-white';
  const subTextClass = variant === 'light' ? 'text-gray-600' : 'text-gray-300';

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-serif mb-6 ${headingClass}`}>About Us</h2>
          <p className={`text-lg ${subTextClass}`}>
            Welcome to Vasstr, where fashion meets individuality. We believe that clothing is more than just fabric; it's an expression of your unique identity. Our mission is to empower you to wear your personality with pride by offering bespoke clothing customization services that cater to your distinct taste and style.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg" 
              alt="Fashion designer at work" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div>
            <h3 className={`text-2xl md:text-3xl font-serif mb-6 ${headingClass}`}>Our Story</h3>
            <p className={`mb-6 ${subTextClass}`}>
              Founded in 2024, Vasstr was born out of a passion for creativity and a desire to break free from the constraints of conventional fashion. Our journey began with a simple idea: to give everyone the opportunity to transform their wardrobe into a canvas of self-expression.
            </p>
            <p className={`mb-6 ${subTextClass}`}>
              Today, we are proud to be a trusted name in clothing customization, serving customers who value quality, craftsmanship, and originality. We've built a vibrant community of fashion enthusiasts and artisans who share our vision of a more personalized fashion industry.
            </p>
            <p className={`${subTextClass}`}>
              Our dedication to excellence and our commitment to helping you express yourself through fashion continue to drive everything we do at Vasstr.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;