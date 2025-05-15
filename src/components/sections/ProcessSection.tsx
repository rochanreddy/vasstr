import React from 'react';
import { MessageSquare, Palette, Ruler, Scissors, ShoppingBag, Heart } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Share your ideas and requirements with us. Our team will work closely with you to understand your vision.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Our designers create sketches and mockups based on your preferences, with revision rounds until you\'re satisfied.',
  },
  {
    icon: Ruler,
    title: 'Measurements',
    description: 'Provide your measurements or use our virtual fitting tool for the perfect fit every time.',
  },
  {
    icon: Scissors,
    title: 'Crafting',
    description: 'Our skilled artisans carefully craft your garment, paying close attention to every detail.',
  },
  {
    icon: ShoppingBag,
    title: 'Delivery',
    description: 'Your custom creation is carefully packaged and delivered right to your doorstep.',
  },
  {
    icon: Heart,
    title: 'Enjoy',
    description: 'Wear your personalized creation with confidence, knowing it\'s uniquely yours.',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium mb-4 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">Our Process</h2>
          <p className="text-lg text-gray-600">
            Creating your custom fashion piece is a collaborative journey. Here's how our streamlined process works to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-white shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-2xl bg-primary text-white text-lg flex items-center justify-center font-medium transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                {index + 1}
              </div>
              <div className="mb-6 text-primary transform group-hover:scale-110 transition-transform duration-300">
                <step.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;