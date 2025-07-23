import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

const ProductSlider: React.FC = () => {
  const navigate = useNavigate();
  const { products } = useData();

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  if (!products || products.length === 0) return null;

  const defaultDescription =
    'Premium quality and highly durable, perfect for industrial and residential use.';

  return (
    <section className="pb-0 sm:pb-10 w-screen bg-transparent overflow-hidden flex flex-col justify-start relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] custom-top-padding custom-bottom-padding custom-tablet-width">
      {/* Heading */}
      <div className="text-center px-4 custom-mobile-heading-gap">
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-3">
          Our Products
        </h2>
        <p className="font-inter text-[#F3F3E0] text-xs sm:text-base max-w-2xl mx-auto leading-tight">
          Discover our comprehensive range of electrical and hardware solutions
        </p>
      </div>

      {/* Scrollable Slider */}
      <div className="w-screen overflow-x-auto sm:overflow-hidden custom-slider-container">
        <div className="slider-track flex gap-2 sm:gap-8 pl-2 sm:pl-8 sm:animate-scroll-x">
          {[...products, ...products, ...products].map((product, index) => (
            <div
              key={`${product._id}-${index}`}
              className="w-[68vw] sm:w-80 h-[340px] sm:h-[520px] flex-shrink-0 bg-gradient-to-br from-white to-gray-100 rounded-xl p-2 sm:p-6 shadow-sm sm:shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out border border-gray-200 hover:ring-2 hover:ring-primary flex flex-col"
            >
              {/* Product Image */}
              <div className="h-[50%] w-full flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name || 'Product'}
                  loading="lazy"
                  className="max-h-full object-contain"
                />
              </div>

              {/* Product Content */}
              <div className="mt-0 sm:mt-4 text-center flex flex-col flex-grow justify-start">
                <h3 className="font-playfair text-sm sm:text-xl font-bold text-[#183B4E] mb-1 sm:mb-2 min-h-[34px] sm:min-h-[56px] flex items-center justify-center px-2">
                  {product.name}
                </h3>
                <p className="text-[10px] sm:text-sm text-gray-700 font-inter px-2 sm:px-4 mb-1 sm:mb-4 leading-snug">
                  {product.shortDescription || defaultDescription}
                </p>
              </div>

              {/* View Button */}
              <div className="text-center mt-auto">
                <button
                  onClick={() => handleProductClick(product._id)}
                  className="bg-accent text-white font-semibold w-full text-xs sm:text-base px-4 py-2 sm:px-6 sm:py-3 border border-black rounded-md shadow-md hover:scale-105 hover:shadow-[0_0_16px_rgba(221,168,83,0.8)] transition-all duration-300 ease-in-out animate-glow"
                >
                  View →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center px-4 custom-mobile-cta-gap">
        <button
          onClick={() => navigate('/products')}
          className="bg-accent text-white text-sm sm:text-base font-inter font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_12px_rgba(221,168,83,0.8)] animate-glow "
        >
          View All Products →
        </button>
      </div>

      {/* Custom Styles */}
      <style>{`
        /* MOBILE */
        @media (max-width: 639px) {
          .custom-top-padding {
            padding-top: 0.375rem !important;
          }
          .custom-bottom-padding {
            padding-bottom: 0 !important;
          }
          .custom-mobile-heading-gap {
            margin-bottom: 2.36rem !important;
          }
          .custom-slider-container {
            margin-top: 0.25rem !important;
            margin-bottom: 0.25rem !important;
          }
          .custom-mobile-cta-gap {
            margin-top: 2rem !important;
            margin-bottom: 0 !important;
          }
          .custom-mobile-cta-gap button {
            margin-bottom: 0 !important;
          }
        }

       

        /* TABLET */
        @media (max-width: 1023px) {
          .custom-top-padding {
            padding-top: 0.375rem !important;
          }
          .custom-bottom-padding {
            padding-bottom: 0 !important;
          }
          .custom-mobile-heading-gap {
            margin-bottom: 2.36rem !important;
          }
          .custom-slider-container {
            margin-top: 0.25rem !important;
            margin-bottom: 0.25rem !important;
          }
          .custom-mobile-cta-gap {
            margin-top: 2rem !important;
            margin-bottom: 0.5rem !important;
          }
          .custom-mobile-cta-gap button {
            margin-bottom: 0 !important;
          }
        }

        /* DESKTOP */
        @media (min-width: 1024px) {
          .custom-top-padding {
            padding-top: 0 !important;
          }
          .custom-bottom-padding {
            padding-bottom: 2.5rem !important;
          }
          .custom-mobile-heading-gap {
            margin-bottom: 2rem !important;
          }
          .custom-slider-container {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          .custom-mobile-cta-gap {
            margin-top: 3rem !important;
            margin-bottom: 0 !important;
          }
        }

        @media (min-width: 640px) {
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% + 100vw - 2rem)); }
          }
          .slider-track {
            width: fit-content;
            animation: scroll-x 270s linear infinite;
          }
          .slider-track:hover {
            animation-play-state: paused;
          }
        }

        @media (max-width: 639px) {
          .slider-track {
            animation: none !important;
          }
        }

        @keyframes glow-pulse {
          0% { box-shadow: 0 0 0 rgba(221, 168, 83, 0.8); }
          50% { box-shadow: 0 0 12px rgba(221, 168, 83, 0.8); }
          100% { box-shadow: 0 0 0 rgba(221, 168, 83, 0.8); }
        }

        .animate-glow {
          animation: glow-pulse 2.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default ProductSlider;
