import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      image: 'https://i.postimg.cc/SKMPBdS9/pexels-heiko-ruth-53441229-7859953.jpg',
    },
    {
      image: 'https://i.postimg.cc/cJYyTdk5/De-Watermark-ai-1752730091299.jpg',
    },
    {
      image: 'https://i.postimg.cc/BQqS6P7Z/De-Watermark-ai-1752729973722.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      className="relative min-h-[75vh] sm:min-h-[calc(100vh+2cm)] overflow-hidden pt-20 sm:pt-28"
      aria-label="Homepage banner section"
    >
      <Helmet>
        <title>Ganga Electrical & Hardwares | Best pump sales in Bangalore</title>
        <meta
          name="description"
          content="Ganga Electrical & Hardwares - Your trusted source for water pumps, plumbing, electricals, and hardware solutions in India."
        />
        <meta
          name="keywords"
          content="Ganga Electricals, water pumps, electrical hardware, plumbing, best hardware store India, submersible pumps, ganga pumps, ganga hardwares, pumps in banglaore, estimate for pumps, ganga electrical and hardwares, best pump installation in bangalore"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gangapumps.com/" />
        <meta property="og:title" content="Ganga Electrical & Hardwares" />
        <meta
          property="og:description"
          content="Trusted pump sales in Bangalore"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/cHpQGMbQ/three.jpg"
        />
        <meta property="og:url" content="https://gangapumps.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "HardwareStore",
              "name": "Ganga Electrical & Hardwares",
              "image": "https://i.postimg.cc/cHpQGMbQ/three.jpg",
              "url": "https://gangapumps.com/",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kottigepalya",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560091",
                "addressCountry": "IN"
              },
              "telephone": "+91-9986082495",
              "openingHours": "Mo-Sa 09:00-18:00"
            }
          `}
        </script>
      </Helmet>

      <h1 className="sr-only">
        Ganga Electrical & Hardwares - Your Trusted Pump Solutions In Banglore
      </h1>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt="Ganga Electrical & Hardwares"
            title="Ganga Electricals & Hardware - Trusted Pump Services in Banglore"
            aria-label="Hero image showing electrical hardware"
            className="w-full h-full object-cover"
          />

          {/* Background Gradient */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/70 via-black/40 to-transparent sm:from-black/60 sm:via-black/30 pointer-events-none" />

          {/* Text Content */}
          <div className="absolute bottom-12 left-4 right-4 z-20 sm:bottom-40 sm:left-8 sm:right-4 sm:max-w-xl">
            <h2 className="font-playfair text-[#FFDC60] text-2xl font-bold leading-tight tracking-wide drop-shadow-[0_2px_4px_rgba(255,220,96,0.4)] sm:text-3xl md:text-4xl lg:text-5xl sm:leading-tight">
              Built on Trust <br />
              Driven by Experience
            </h2>

            <p className="font-inter text-sm leading-relaxed mt-4 text-[#D9E3F0] drop-shadow-sm tracking-normal sm:text-base sm:mt-3 md:text-lg">
              We understand what every Indian home needs — because we've served
              over <strong>10,000+ satisfied customers</strong> with domestic
              pumping solutions that last.
            </p>

            <button
              onClick={() => navigate('/contact')}
              className="mt-4 px-5 py-2.5 bg-[#FFDC60] hover:bg-[#FFD93D] text-black text-lg font-bold rounded-lg transition shadow-[0_0_20px_rgba(255,220,96,0.8)]"
            >
              Get Quote Now
            </button>
          </div>
        </div>
      ))}

      {/* Mobile-only overrides */}
      <style>
        {`
          @media (max-width: 640px) {
            section[aria-label="Homepage banner section"] {
              min-height: 50vh !important;
              height: 65vh;
            }
            section[aria-label="Homepage banner section"] img {
              object-fit: cover !important;
              object-position: center;
              height: 100%;
              width: 100%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
