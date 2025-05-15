import React from 'react';
import { motion } from 'framer-motion';
// We will re-evaluate these imports as we build the page
// import Hero from '../components/ui/Hero';
// import AboutSection from '../components/sections/AboutSection';
// import ServicesSection from '../components/sections/ServicesSection';
// import ProcessSection from '../components/sections/ProcessSection';
// import TestimonialsSection from '../components/sections/TestimonialsSection';
// import CTASection from '../components/sections/CTASection';
// import VendorSection from '../components/sections/VendorSection';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section - Fullscreen Image with Centered Text */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1500&q=80"
            alt="Fashion background"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-center mb-6 leading-tight"
          >
            Discover <span className="text-brand-gold drop-shadow-lg">Your Style</span><br />
            <span className="text-2xl md:text-4xl font-light block mt-2 tracking-widest">with VASSTR</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className="text-lg md:text-2xl font-light text-center max-w-2xl mb-10 text-brand-light-gray"
          >
            Artisanal. Bespoke. Uniquely Yours. Elevate your wardrobe with handcrafted fashion from visionary designers.
          </motion.p>
          <motion.a
            href="/products"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-3 bg-brand-gold text-brand-charcoal font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300 uppercase tracking-wider"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            Explore Collections
          </motion.a>
        </div>
      </motion.section>

      {/* Featured Collections Section */}
      <section className="py-16 md:py-24 bg-brand-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">Featured Collections</h2>
            <p className="text-brand-dark-gray max-w-xl mx-auto">
              Discover curated selections from our talented artisans, showcasing unique styles and impeccable craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: 'Ethereal Silks',
                description: 'Flowing garments crafted from the finest hand-painted silks, perfect for making a subtle yet unforgettable statement.',
                imageUrl: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600' // Placeholder
              },
              {
                title: 'Urban Sculptures',
                description: 'Bold, architectural pieces that redefine modern tailoring with innovative cuts and sustainable materials.',
                imageUrl: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=600' // Placeholder
              },
              {
                title: 'Nomadic Threads',
                description: 'Inspired by global travels, this collection features rich textures, earthy tones, and handcrafted embellishments.',
                imageUrl: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600' // Placeholder
              }
            ].map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2 * index, duration: 0.7, ease: 'easeOut' }}
                className="relative group rounded-2xl overflow-hidden shadow-2xl border-l-4 border-brand-gold bg-white/60 backdrop-blur-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out"
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              >
                {/* Gradient overlay for glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-brand-gold/10 to-brand-light-gray/40 pointer-events-none z-0" />
                <div className="relative z-10">
                  <div className="relative h-72 w-full overflow-hidden rounded-t-2xl">
                    <img 
                      src={collection.imageUrl}
                      alt={collection.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-charcoal mb-2">{collection.title}</h3>
                    <p className="text-brand-dark-gray text-sm mb-4 h-20 overflow-hidden">{collection.description}</p>
                    <a 
                      href="/products" // Link to a specific collection page or filter later
                      className="inline-block text-brand-gold hover:text-brand-charcoal font-semibold text-sm transition-colors duration-300"
                    >
                      View Collection &rarr;
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="py-16 md:py-24 bg-brand-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
              More Than Just Fashion
            </h2>
            <p className="text-lg text-brand-dark-gray leading-relaxed mb-8">
              V A S S T R is a curated space where discerning individuals meet visionary artisans. We champion unique design, ethical craftsmanship, and the power of personal style. Discover pieces that tell a story, made with passion and precision.
            </p>
            <a 
              href="/vasstr-info" 
              className="inline-block bg-brand-charcoal text-brand-white hover:bg-brand-dark-gray font-semibold py-3 px-8 rounded-sm text-base transition-colors duration-300 uppercase tracking-wider"
            >
              Learn Our Story
            </a>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="py-16 md:py-24 bg-brand-light-gray"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">Why V A S S T R?</h2>
            <p className="text-brand-dark-gray max-w-xl mx-auto">
              Experience a new way to engage with fashion, designed for those who value authenticity and artistry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              {/* Icon placeholder - can add SVG or Lucide icon here */}
              <div className="text-brand-gold mb-4">{/* <Icon size={48} /> */}</div> 
              <h3 className="text-xl font-bold text-brand-charcoal mb-2">Exclusive Designs</h3>
              <p className="text-brand-dark-gray text-sm">
                Access unique, handcrafted pieces you won't find anywhere else, direct from talented artisans.
              </p>
            </div>
            <div className="p-6">
              {/* Icon placeholder */}
              <div className="text-brand-gold mb-4">{/* <Icon size={48} /> */}</div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-2">Ethical & Sustainable</h3>
              <p className="text-brand-dark-gray text-sm">
                Support slow fashion, ethical production, and artisans committed to sustainable practices.
              </p>
            </div>
            <div className="p-6">
              {/* Icon placeholder */}
              <div className="text-brand-gold mb-4">{/* <Icon size={48} /> */}</div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-2">Personalized Connection</h3>
              <p className="text-brand-dark-gray text-sm">
                Connect with designers, understand their creative process, and commission bespoke items.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="py-16 md:py-24 bg-brand-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">Voices of V A S S T R</h2>
            <p className="text-brand-dark-gray max-w-xl mx-auto">
              Hear what our community says about their bespoke fashion journey and unique creations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { 
                quote: "The craftsmanship is exquisite. I finally have a piece that truly reflects my personality. Vasstr made it possible!", 
                name: 'Alexandra D.', 
                role: 'Happy Customer', 
                avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=faces' 
              },
              { 
                quote: "As a designer, Vasstr gave me the platform to reach a global audience that appreciates sustainable and unique fashion.", 
                name: 'Kenji T.', 
                role: 'Featured Artisan', 
                avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=faces'
              },
              { 
                quote: "Finding a perfectly tailored outfit was always a challenge. With Vasstr, the process was seamless and the result, stunning.", 
                name: 'Sofia R.', 
                role: 'Delighted Client', 
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=faces'
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2 * index, duration: 0.7, ease: 'easeOut' }}
                className="bg-brand-light-gray p-6 md:p-8 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 object-cover" loading="lazy"/>
                <p className="text-brand-dark-gray italic mb-4 text-sm leading-relaxed flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <h4 className="font-semibold text-brand-charcoal">{testimonial.name}</h4>
                  <p className="text-xs text-brand-gold tracking-wide uppercase">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Fashion Journal Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="py-16 md:py-24 bg-brand-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">Fashion Journal</h2>
            <p className="text-brand-dark-gray max-w-xl mx-auto">
              Explore the latest trends, style inspiration, and stories from the world of bespoke fashion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'The Rise of Sustainable Luxury',
                desc: 'How eco-conscious materials and ethical production are redefining high fashion for a new generation.',
                link: '#'
              },
              {
                image: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Tailoring for the Individual',
                desc: 'Why custom-fit and made-to-measure are the ultimate expressions of personal style.',
                link: '#'
              },
              {
                image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Artisan Spotlight: The Hand Behind the Craft',
                desc: 'Meet the makers whose passion and skill bring unique visions to life, one stitch at a time.',
                link: '#'
              }
            ].map((journal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2 * index, duration: 0.7, ease: 'easeOut' }}
                className="bg-brand-light-gray rounded-lg shadow-lg overflow-hidden group"
              >
                <img src={journal.image} alt={journal.title} className="w-full h-56 object-cover" loading="lazy"/>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-charcoal mb-2">{journal.title}</h3>
                  <p className="text-brand-dark-gray text-sm mb-4 h-20 overflow-hidden">{journal.desc}</p>
                  <a href={journal.link} className="inline-block text-brand-gold hover:text-brand-charcoal font-semibold text-sm transition-colors duration-300">Read More &rarr;</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </>
  );
};

export default Home;