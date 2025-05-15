import React from 'react';
// We can re-introduce icons or other elements as needed.
// import { Paintbrush, Users, BarChart as ChartBar, Award, CheckCircle } from 'lucide-react';

const VasstrInfo: React.FC = () => {
  return (
    <>
      {/* Page Header Section */}
      <section className="py-24 md:py-32 bg-brand-light-gray text-brand-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            About V A S S T R
          </h1>
          <p className="text-lg md:text-xl text-brand-dark-gray max-w-3xl mx-auto">
            We believe fashion is a statement, a form of art, and a personal journey. Vasstr connects you with visionary artisans and designers, offering a curated space for bespoke and uniquely crafted pieces.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-8">
              Our Philosophy: Empowering Individuality
            </h2>
            <div className="space-y-6 text-brand-dark-gray leading-relaxed">
              <p>
                In a world of mass production, Vasstr stands for the unique, the personal, and the handcrafted. We are passionate about supporting independent designers and artisans who pour their heart and soul into every creation. Our platform is more than just a marketplace; it's a community built on the appreciation of quality craftsmanship and sustainable practices.
              </p>
              <p>
                Whether you're a discerning customer looking for a one-of-a-kind garment that tells a story, or a talented designer seeking a global audience for your creations, Vasstr provides the tools and the stage. We aim to make custom fashion accessible, enjoyable, and a true reflection of your personal style.
              </p>
              <p>
                We champion slow fashion, ethical production, and the beauty of items made to last. Join us in celebrating creativity and the artisans who bring unique visions to life.
              </p>
            </div>

            {/* Placeholder for more detailed sections like 'Benefits', 'How It Works' if needed */}
            <div className="mt-16 pt-12 border-t border-brand-gray">
              <h3 className="text-2xl font-bold text-brand-charcoal mb-6 text-center">More to Discover</h3>
              <p className="text-center text-brand-dark-gray">
                We can reintegrate and restyle more detailed information here, such as benefits for designers, how our platform works, or success stories, adapting them to the new visual identity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VasstrInfo;