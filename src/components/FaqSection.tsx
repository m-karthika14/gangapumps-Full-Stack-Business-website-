import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    question: 'How long does delivery take?',
    answer: 'Delivery typically takes 2-5 business days depending on your location.',
  },
  {
    question: 'Do you offer installation services?',
    answer: 'Yes, we offer expert installation services at an additional cost.',
  },
  {
    question: 'Are your products under warranty?',
    answer: 'Yes, all our products come with manufacturer warranty.',
  },
  {
    question: 'Do you support bulk orders?',
    answer: 'Absolutely! We cater to both individual and business bulk orders.',
  },
];

const colors = {
  cream: '#F3F3E0',
  primary: '#27548A',
  dark: '#183B4E',
  accent: '#DDA853',
};

const FaqSection: React.FC = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Ganga Electricals & Hardwares</title>
        <meta
          name="description"
          content="Frequently Asked Questions about delivery, installation, warranty, and bulk orders at Ganga Electricals & Hardwares, Bangalore."
        />
        <meta
          name="keywords"
          content="Ganga Pumps, Ganga Electrical and Hardwares, water pumps Bangalore, submersible pumps, electrical store Bangalore, best hardware store in Bengaluru, pressure pumps, plumbing materials, borewell motor sales"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gangapumps.com/" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link rel="preload" as="image" href="https://i.postimg.cc/RFZygBMs/pexels-heiko-ruth-53441229-7859953.avif" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <style>{`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
      `}</style>

      <section
        className="w-screen bg-white py-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
        aria-label="Frequently Asked Questions"
      >
        <div
          className="w-full max-w-4xl mx-auto rounded-2xl px-4 sm:px-5 md:px-6 py-8 sm:py-10"
          style={{
            backgroundColor: colors.dark,
            color: colors.cream,
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <div className="flex flex-col items-center text-center mb-8 px-2">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold tracking-tight drop-shadow">
              Frequently Asked <br className="sm:hidden" /> Questions
            </h2>
            <p className="mt-2 text-sm sm:text-base font-inter max-w-2xl">
              Everything you need to know about our products, services, and policies.
            </p>
          </div>

          <div className="mt-4 space-y-3 px-1">
            {faqs.map((faq, index) => {
              const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
                    inView ? 'animate-fade-up' : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 0 0.5px rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    color: colors.cream,
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left p-4 font-inter text-sm sm:text-base font-medium bg-transparent transition-all duration-300"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    {faq.question}
                    <span className="ml-3">
                      {openIndex === index ? (
                        <ChevronUp size={18} color={colors.cream} />
                      ) : (
                        <ChevronDown size={18} color={colors.cream} />
                      )}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden px-4 text-sm sm:text-base font-inter transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-40 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center px-2">
            <p className="font-playfair text-sm sm:text-base mb-2">Chat with us on WhatsApp</p>
            <a
              href="https://wa.me/919986082495?text=Please%20fill%20in%20your%20details%3A%0AName%20-%20%0APhone%20Number%20-%20%0AProduct/Request%20-%20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#128C4B] text-white font-inter px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300 text-sm"
            >
              <FaWhatsapp className="mr-2" size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
