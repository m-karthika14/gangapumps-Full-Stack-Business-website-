import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const OurClients = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = [
    '/one.avif',
    '/two.avif',
    '/three.avif',
    '/four.avif',
  ];

  const collageStyles = [
    { container: 'absolute top-0 left-0 w-6/12 z-10', rotation: 'transform -rotate-6' },
    { container: 'absolute top-8 right-0 w-6/12 z-20', rotation: 'transform rotate-4' },
    { container: 'absolute bottom-8 left-8 w-6/12 z-0', rotation: 'transform rotate-2' },
    { container: 'absolute bottom-0 right-8 w-6/12 z-20', rotation: 'transform -rotate-3' },
  ];

  const mobileCollageStyles = [
    { rotation: 'transform -rotate-3' },
    { rotation: 'transform rotate-3' },
    { rotation: 'transform rotate-2' },
    { rotation: 'transform -rotate-2' },
  ];

  return (
    <section ref={ref} className="bg-white py-6 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Text + Collage */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 md:px-12">
          {/* Text */}
          <div className={`flex-1 z-40 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 
              className="text-4xl sm:text-5xl font-bold font-playfair mb-4 tracking-tight"
              style={{ color: '#0e324c' }}
            >
              Trusted Pump Suppliers in Bangalore
            </h2>
            <p className="text-lg text-dark mb-6 font-inter max-w-xl leading-relaxed">
              Experience top-notch installation, repair, and maintenance services for all kinds of water pumps—trusted by hundreds of homes and industries in Bangalore.
            </p>
            <Link
              to="/about"
              className="bg-accent text-dark px-8 py-4 rounded-xl shadow-lg shadow-accent/40 hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg hover:shadow-accent/60"
            >
              Learn More
            </Link>
          </div>

          {/* Collage - Desktop */}
          <div className={`flex-1 relative h-[550px] w-full transition-all duration-1000 delay-300 hidden md:block ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {images.map((src, i) => (
              <div key={i} className={`${collageStyles[i].container} ${collageStyles[i].rotation}`}>
                <div className="relative bg-dark p-2 pb-4 rounded-md shadow-2xl">
                  <img
                    src={src}
                    alt={`Pump Service ${i + 1}`}
                    className="w-full h-56 object-cover rounded-sm"
                    loading="lazy"
                    fetchPriority={i === 0 ? 'high' : 'low'}
                  />
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-dark rounded-full shadow-inner border-2 border-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collage - Mobile */}
        <div className={`mt-12 md:hidden transition-all duration-1000 delay-300 px-4 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, i) => (
              <div key={i} className={`${mobileCollageStyles[i].rotation}`}>
                <div className="relative bg-dark p-2 pb-4 rounded-md shadow-2xl">
                  <img
                    src={src}
                    alt="Ganga Electrical & Hardwares"
                    className="w-full aspect-square sm:aspect-[4/3] object-cover rounded-sm"
                    loading="lazy"
                    fetchPriority={i === 0 ? 'high' : 'low'}
                  />
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-dark rounded-full shadow-inner border-2 border-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authorised Dealers Section */}
        <div className="mt-12 px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-start justify-between gap-1 md:gap-24">
            {/* Left - Text */}
            <div className="w-full md:w-1/3 text-left">
              <h2 
                className="text-4xl sm:text-5xl font-bold font-playfair mb-4 tracking-tight"
                style={{ color: '#0e324c' }}
              >
                Our Authorised Dealers
              </h2>
              <p className="text-base sm:text-lg text-dark font-inter leading-relaxed">
                We collaborate with the top pump brands in the industry to ensure the highest quality products for our clients.
              </p>
            </div>

            {/* Right - Logos */}
            <div className="w-full md:w-2/3 flex flex-wrap justify-center md:justify-start items-center gap-0.1 sm:gap-20">
              <img
                src="https://i.postimg.cc/VLCK9731/c-r-i-pumps-logo-png-seeklogo-288586-removebg-preview.png"
                alt="CRI Pumps"
                className="h-48 sm:h-40 object-contain"
                loading="lazy"
                fetchPriority="low"
              />
              <img
                src="https://i.postimg.cc/3xMY9cNZ/Grundfos-removebg-preview.png"
                alt="Grundfos Pumps"
                className="h-48 sm:h-40 object-contain"
                loading="lazy"
                fetchPriority="low"
              />
              <img
                src="https://i.postimg.cc/7P2x74YL/LUBI-LOGO-192-X-192-removebg-preview.png"
                alt="Lubi Pumps"
                className="h-48 sm:h-40 object-contain"
                loading="lazy"
                fetchPriority="low"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
