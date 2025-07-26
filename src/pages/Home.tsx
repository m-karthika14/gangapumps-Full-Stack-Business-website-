import { useInView } from 'react-intersection-observer';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import ProductSlider from '../components/ProductSlider';
import WhyChooseUs from '../components/WhyChooseUs';
import FaqSection from '../components/FaqSection';
import ReviewsSection from '../components/ReviewsSection';
import OurClients from '../components/OurClients';

const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* SEO Tags */}
      <Helmet>
        <title>Ganga Electrical & Hardwares | Home</title>
        <meta
          name="description"
          content="Discover high-quality electricals and hardware from trusted brands. Ganga Electrical & Hardwares delivers excellence with every product."
        />
        <meta
    name="keywords"
    content="Ganga Pumps, Ganga Electrical and Hardwares, water pumps Bangalore, submersible pumps, electrical store Bangalore, best hardware store in Bengaluru, pressure pumps, plumbing materials, borewell motor sales"
  />
        <meta property="og:title" content="Ganga Electrical & Hardwares | Home" />
        <meta
          property="og:description"
          content="Discover high-quality electricals and hardware from trusted brands. Ganga Electrical & Hardwares delivers excellence with every product."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/" />
        <meta property="og:image" content="/new.avif" />
        <link rel="canonical" href="https://gangapumps.com/" />

        {/* Add LCP Optimization */}
        <link
          rel="preload"
          as="image"
          href="https://i.postimg.cc/RFZygBMs/pexels-heiko-ruth-53441229-7859953.avif"
          fetchPriority="high"
          type="image/avif"
        />

         <link
  rel="alternate"
  href="https://gangapumps.com/"
  {...{ hreflang: 'en-IN' }}
/>

        {/* JSON-LD Schema for Local Business */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "HardwareStore",
            "name": "Ganga Electrical & Hardwares",
            "image": "/new.avif",
            "url": "https://gangapumps.com/",
            "telephone": "+91-9986082495",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kottigepalya",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "postalCode": "560091",
              "addressCountry": "IN"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              }
            ],
            "sameAs": [
              "https://www.instagram.com/yourbusiness",
              "https://www.facebook.com/yourbusiness"
            ]
          }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* Gradient Background for Statistics + Products */}
      <div
        style={{
          position: 'relative',
          minHeight: '120vh',
          background: '#183B4E',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: '0 8px 32px rgba(24, 59, 78, 0.5)',
          zIndex: 0,
        }}
        className="py-12 px-4"
      >
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out max-w-7xl mx-auto ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-10">
            <Statistics />
          </div>

          <div>
            <ProductSlider />
          </div>
        </div>
      </div>

      <div className="w-full bg-white">
        <OurClients />
      </div>

      <WhyChooseUs />

      <div className="w-full">
        <FaqSection />
      </div>

      <div className="w-full bg-white">
        <ReviewsSection />
      </div>
    </div>
  );
};

export default Home;
