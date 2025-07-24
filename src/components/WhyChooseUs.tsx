import React from 'react';
import { FaTools, FaShippingFast, FaSmile, FaHeadset, FaAward } from 'react-icons/fa';

const rawCards = [
  { icon: <FaAward />, title: '25+ Years', desc: 'Of trusted service' },
  { icon: <FaTools />, title: 'Top-Grade Tools', desc: 'Electrical and hardware' },
  { icon: <FaSmile />, title: 'Expert Advice', desc: 'Friendly technical guidance' },
  { icon: <FaShippingFast />, title: 'Fast Delivery', desc: 'Across all regions' },
  { icon: <FaHeadset />, title: 'Support', desc: 'Reliable post-sale help' },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white">
      {/* Header */}
      <div className="relative w-full min-h-[30vh]">
        <img
          src="https://i.postimg.cc/mrGtK0SD/pexels-pixabay-357440.jpg"
          alt="Background"
          loading="lazy"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-playfair uppercase text-center">
            WHY CHOOSE US?
          </h2>
        </div>
      </div>

      {/* Cards Section */}
      <div className="-mt-[7.5vh] px-4 sm:px-6 md:px-12 z-20 relative">
        {/* Mobile - Single Stacked Card */}
        <div className="sm:hidden flex flex-col py-6">
          <div className="bg-[#183B4E] rounded-2xl p-6 w-full shadow-[0_12px_60px_rgba(0,0,0,0.3)]">
            {rawCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-white mb-6 last:mb-0"
              >
                <div className="text-3xl mb-2 drop-shadow-[0_0_10px_#00ADB5]">{card.icon}</div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-center">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {rawCards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-[0_12px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_70px_rgba(0,0,0,0.45)] rounded-2xl p-8 text-center flex flex-col items-center justify-center transition duration-300"
            >
              <div className="text-primary text-4xl mb-4 drop-shadow-[0_0_10px_#00ADB5]">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-base">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-[10vh]" />
    </section>
  );
};

export default WhyChooseUs;
