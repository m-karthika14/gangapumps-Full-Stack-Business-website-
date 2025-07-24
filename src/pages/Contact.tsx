import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useData } from '../context/DataContext';

const Contact = () => {
  const { addLead } = useData();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        type: 'estimate'
      });
      alert('Your estimate request has been submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Error submitting estimate:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    "name": "Ganga Electrical & Hardwares",
    "image": "/new.avif", // Replace with your logo URL
    "telephone": "+91 9986082495",
    "email": "sales@gangapumps.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 57/6, Opposite Nirashrithara Parihara Kendra, Sajjepalya, Magadi Main Road",
      "addressLocality": "Kottigepalya",
      "addressRegion": "Karnataka",
      "postalCode": "560091",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Sa 09:00-20:00, Su 10:00-18:00",
    "url": "https://www.gangapumps.com"
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Ganga Electrical & Hardwares</title>
        <meta name="description" content="Get in touch with Ganga Electrical & Hardwares for expert consultations and high-quality hardware products." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-dark pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#00ADB5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Begin Your Consultation
            </h1>
            <p className="font-inter text-white text-base sm:text-lg max-w-2xl mx-auto">
              Expert advice. <span className="text-accent font-semibold">Quality hardware</span>. Delivered right.
            </p>
          </div>

          {/* Form Section */}
          <section className="bg-white/90 rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-shadow duration-300 p-4 sm:p-8 mb-12">
            <h2 className="text-xl sm:text-2xl font-playfair font-bold text-dark mb-6 text-center">
              Get an Estimate
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 bg-white/90 rounded-md font-inter text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border border-gray-200 bg-white/90 rounded-md font-inter text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 border border-gray-200 bg-white/90 rounded-md font-inter text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full md:col-span-2 px-4 py-3 border border-gray-200 bg-white/90 rounded-md font-inter text-sm sm:text-base h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white font-inter px-6 py-3 rounded-md text-sm sm:text-base hover:bg-opacity-90 transition-all duration-300 shadow-md"
              >
                Get an Estimate
              </button>
            </form>
          </section>

          {/* Product Teaser Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white/90 rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-shadow duration-300 p-6 sm:p-10 mb-12 text-center flex flex-col items-center justify-center overflow-hidden"
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '60%',
                height: '100%',
                background: 'radial-gradient(circle at left center, rgba(39, 84, 138, 0.5), transparent 70%)',
                zIndex: 0,
                filter: 'blur(70px)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60%',
                height: '100%',
                background: 'radial-gradient(circle at right center, rgba(255, 140, 0, 0.5), transparent 70%)',
                zIndex: 0,
                filter: 'blur(70px)',
              }}
            />
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-dark mb-4 flex items-center gap-2 justify-center z-10">
              <ShoppingBag size={24} className="sm:size-28 text-accent" />
              Explore Our Range
            </h2>
            <p className="font-inter text-gray-800 text-base sm:text-lg mb-4 flex items-center gap-2 justify-center z-10 text-center sm:text-left">
              <span className="block sm:inline">Get <span className="text-primary font-semibold">top quality</span> products from <span className="text-primary font-semibold">trusted brands</span></span>
            </p>
            <span className="inline-block bg-accent text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full animate-pulse mb-6 z-10">
              Handpicked & Bestsellers
            </span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="z-10"
            >
              <Link
                to="/products"
                className="rounded-md px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-inter font-semibold"
                style={{
                  backgroundColor: '#27548A',
                  color: '#FFFFFF',
                  boxShadow: '0 0 20px rgba(39, 84, 138, 0.6)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                View Products →
              </Link>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <section className="bg-white/90 rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-shadow duration-300 p-6 sm:p-8">
            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-dark mb-8 text-center">
              Get in Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 text-sm sm:text-lg font-inter text-gray-700">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone size={24} className="text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Phone</h4>
                    <p>+91 9986082495</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin size={24} className="text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Address</h4>
                    <p>
                      No. 57/6, Opp. Nirashrithara Parihara Kendra,<br />
                      Sajjepalya, Magadi Main Road,<br />
                      Manahalli Road, Kottigepalya-560091<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail size={24} className="text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Email</h4>
                    <p>sales@gangapumps.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={24} className="text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Business Hours</h4>
                    <p>Mon-Sat: 9:00 AM - 8:00 PM<br />Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
