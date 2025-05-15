import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      {/* Page Header Section */}
      <section className="py-24 md:py-32 bg-brand-light-gray text-brand-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-brand-dark-gray max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have a question about our collections, designers, or need assistance, please reach out.
          </p>
        </div>
      </section>

      {/* Main Content Section - Placeholder for Contact Form / Info */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-brand-white p-8 md:p-12 shadow-lg rounded-lg border border-brand-gray">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-8 text-center">
              Contact Us
            </h2>
            <p className="text-brand-dark-gray text-center mb-8">
              Our contact form and detailed contact information will be available here soon. 
              For urgent inquiries, please email us at <a href="mailto:hello@vasstr.com" className="text-brand-gold hover:underline">hello@vasstr.com</a>.
            </p>
            {/* Placeholder for contact form */}
            <div className="text-center mt-8">
              <p className="text-sm text-brand-dark-gray">We aim to respond within 24-48 hours.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 