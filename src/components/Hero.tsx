import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      image: '/onehero.avif',
      mobileImage: '/oneherom.avif',
    },
    {
      image: '/twohero.avif',
      mobileImage: '/twoherom.avif',
    },
    {
      image: '/threehero.avif',
      mobileImage: '/threeherom.avif',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
     className="relative min-h-[75vh] sm:min-h-[calc(100vh+2cm)] overflow-hidden pt-20 sm:pt-28"
      aria-label="Homepage banner section"
    >
      <Helmet>
        <title>Pressure pumps in bangalore</title>
       
      </Helmet>

      <h1 className="sr-only">
        Ganga Electrical & Hardwares - Your Trusted Grundfos Pump Dealers in Bangalore
      </h1>

      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={!isActive}
          >
            <picture>
              <source
                srcSet={slide.mobileImage}
                media="(max-width: 420px)"
              />
              <img
                src={slide.image}
                srcSet={`${slide.image} 1280w`}
                sizes="100vw"
                alt="Pressure Pumps in Bangalore"
                title="Ganga Electricals & Hardware - Trusted Pump Services in Bangalore"
                loading={index === 0 ? 'eager' : 'lazy'}
                {...(index === 0 ? { fetchPriority: 'high' } : {})}
                width={1920}
                height={900}
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent sm:from-black/60 sm:via-black/30 pointer-events-none" />
            {isActive && (
              <div className="absolute bottom-12 left-4 right-4 z-20 sm:bottom-40 sm:left-8 sm:right-4 sm:max-w-xl">
                <h2 className="font-playfair text-[#FFDC60] text-2xl font-bold leading-tight tracking-wide drop-shadow-[0_2px_4px_rgba(255,220,96,0.4)] sm:text-3xl md:text-4xl lg:text-5xl sm:leading-tight">
                  <Link to="/pressure-pumps-bangalore" className="inline-block no-underline text-inherit focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">Pressure Pumps in Bangalore</Link>
                </h2>
                <p className="font-inter text-sm leading-relaxed mt-4 text-[#D9E3F0] drop-shadow-sm tracking-normal sm:text-base sm:mt-3 md:text-lg">
                  Ganga Electrical & Hardwares is a trusted supplier of pressure pumps in Bangalore. We provide Grundfos pressure pumps, <Link to="/pressure-booster-pump-bangalore" className="no-underline text-inherit focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">booster pumps</Link>, submersible pumps and <Link to="/water-pressure-pump-bangalore" className="no-underline text-inherit focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">water pressure pumps</Link> for apartments, <Link to="/pressure-pump-for-home" className="no-underline text-inherit focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">homes</Link> and <Link to="/pressure-pump-for-apartment" className="no-underline text-inherit focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">commercial buildings</Link>.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="mt-4 px-5 py-2.5 bg-[#FFDC60] hover:bg-[#FFD93D] text-black text-lg font-bold rounded-lg transition shadow-[0_0_20px_rgba(255,220,96,0.8)]"
                >
                  Get Quote Now
                </button>
              </div>
            )}
          </div>
        );
      })}

      <style>
        {`
          @media (max-width: 640px) {
            section[aria-label="Homepage banner section"] {
              min-height: 60vh !important;
              height: 70vh;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
