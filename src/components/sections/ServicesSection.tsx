import React, { memo } from 'react';
import { Paintbrush, Scissors, Ruler, Leaf } from 'lucide-react';

const services = [
  {
    title: 'Custom Designs',
    description: 'Whether you have a specific vision or need help bringing your ideas to life, our talented designers are here to collaborate with you. From initial sketches to the final product, we ensure every detail reflects your unique style.',
    icon: Paintbrush,
  },
  {
    title: 'Personalized Embroidery and Printing',
    description: 'Add a personal touch to your garments with our state-of-the-art embroidery and printing services. From monograms and logos to intricate patterns and graphics, we bring your designs to life with precision and flair.',
    icon: Scissors,
  },
  {
    title: 'Tailored Fit',
    description: 'Say goodbye to off-the-rack sizes and hello to clothing that fits you perfectly. Our expert tailors customize each piece to your measurements, ensuring a comfortable and flattering fit every time.',
    icon: Ruler,
  },
  {
    title: 'Eco-Friendly Options',
    description: 'We are committed to sustainability and offer eco-friendly customization options, including organic fabrics and environmentally responsible printing techniques.',
    icon: Leaf,
  },
];

const ServiceCard = memo(({ service }) => (
  <div
    className="relative group rounded-2xl overflow-hidden shadow-2xl border-l-4 border-brand-gold bg-white/60 backdrop-blur-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out"
    style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-brand-gold/10 to-brand-light-gray/40 pointer-events-none z-0" />
    <div className="relative z-10 p-8 flex flex-col items-center text-center">
      <div className="h-14 w-14 rounded-full bg-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
        <service.icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold text-brand-charcoal mb-4">{service.title}</h3>
      <p className="text-brand-dark-gray text-sm mb-2">{service.description}</p>
    </div>
  </div>
));

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">What We Offer</h2>
          <p className="text-lg text-gray-600">
            At Vasstr, we provide a range of customization services to help you create clothing that's uniquely yours. Our experienced team works closely with you to bring your vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;