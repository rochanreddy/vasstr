import React from 'react';
import { Wallet, Link as LinkIcon, ShoppingBag, Shield } from 'lucide-react';
import Button from '../ui/Button';

const features = [
  {
    icon: LinkIcon,
    title: 'Personalized Store Links',
    description: 'Get your own custom URL to share with your audience and build your brand presence.',
  },
  {
    icon: ShoppingBag,
    title: 'Simplified Order Management',
    description: 'Track, manage, and fulfill orders through our intuitive dashboard designed for creators.',
  },
  {
    icon: Wallet,
    title: 'Secure Payment Options',
    description: 'Receive payments safely and promptly with our integrated payment processing system.',
  },
  {
    icon: Shield,
    title: 'Brand Protection',
    description: 'We ensure your designs remain your own with our comprehensive intellectual property protection.',
  },
];

const VendorSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">For Fashion Artisans</h2>
            <p className="text-lg text-gray-600 mb-8">
              VasstrInfo is your dedicated platform to showcase your designs, connect with customers, and grow your fashion business. Join our community of talented creators and take your designs to a global audience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button href="/vasstr-info" size="lg">
              Join as a Designer
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2249248/pexels-photo-2249248.jpeg" 
                alt="Fashion designer at work" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-72 rounded-lg overflow-hidden shadow-lg hidden md:block">
              <img 
                src="https://images.pexels.com/photos/6153954/pexels-photo-6153954.jpeg" 
                alt="Designer sketching" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorSection;