import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const faqs: Array<{ question: string; answerText: string; answerJSX?: React.ReactNode }> = [
  {
    question: 'How long does delivery take?',
    answerText: 'In-stock items are usually delivered within 24 to 48 hours.',
  },
  {
    question: 'Do you offer installation services?',
    answerText: 'Yes, we offer expert installation services at an additional cost.',
  },
  {
    question: 'Are your products under warranty?',
    answerText: 'Yes, all our products come with manufacturer warranty.',
  },
  {
    question: 'Do you support bulk orders?',
    answerText: 'Absolutely! We cater to both individual and business bulk orders.',
  },
  // New FAQ linking to the Whitefield page (ranks for "pressure pumps whitefield")
  {
    question: 'Do you provide pressure pumps in Whitefield?',
    answerText: 'Yes — we provide pressure pump supply and services in Whitefield. See our Whitefield page for details.',
    answerJSX: (
      <>
        Yes — we provide pressure pump supply and services in Whitefield. See our{' '}
        <Link to="/pressure-pumps-whitefield" className="underline text-accent">Whitefield page</Link>{' '}
        for details.
      </>
    ),
  },
  // New FAQ answering where we serve in Bangalore and linking to the 5 neighborhood pages
  {
    question: 'Where do you serve in Bangalore?',
    answerText: 'We serve across Bangalore including Whitefield, BTM, HSR Layout, Electronic City and Marathahalli. (ACTUALLY EACH AND EVERY CORNER IS SERVED)',
    answerJSX: (
      <div>
        Our services are available across Bangalore, covering key areas such as{' '}
        <Link to="/pressure-pumps-whitefield" className="underline text-accent">Whitefield</Link>,{' '}
        <Link to="/pressure-pumps-btm" className="underline text-accent">BTM Layout</Link>,{' '}
        <Link to="/pressure-pumps-hsr-layout" className="underline text-accent">HSR Layout</Link>,{' '}
        <Link to="/pressure-pumps-electronic-city" className="underline text-accent">Electronic City</Link>,{' '}
        <Link to="/pressure-pumps-marathahalli" className="underline text-accent">Marathahalli</Link>, and every major residential and commercial locality in the city.
      </div>
    ),
  },
  // New short, crisp FAQs from user keywords
  {
    question: 'What is the best pressure pump for home?',
    answerText: 'For most homes a compact pressure booster or a SCALA (all-in-one) pump works well — choose by flow requirement and head. Contact us for a recommendation based on your plumbing.',
  },
  {
    question: 'How to increase water pressure in an apartment?',
    answerText: 'Common fixes: fit a booster pump, check and clean filters, and ensure header tank levels are adequate. We provide assessments and installation.',
  },
  {
    question: 'Are you a Grundfos pump dealer in Bangalore?',
    answerText: 'Yes — we are an authorised Grundfos dealer and supply SCALA and other Grundfos pressure solutions with installation and service.',
    answerJSX: (
      <>
        Yes — we are an authorised Grundfos dealer. See our{' '}
        <Link to="/grundfos-pump-dealer-bangalore" className="underline text-accent">Grundfos dealer page</Link>.
      </>
    ),
  },
  {
    question: 'How can I solve water pressure problems?',
    answerText: 'Diagnose leaks, check supply lines, then consider a correctly sized booster or pressure pump. We offer site surveys and quick fixes.',
  },
];

const colors = {
  cream: '#F3F3E0',
  primary: '#27548A',
  dark: '#183B4E',
  accent: '#DDA853',
};

// Individual FAQ item as separate component so hooks can be used safely per item
const FAQItem: React.FC<{
  faq: { question: string; answerText: string; answerJSX?: React.ReactNode };
  index: number;
  openIndex: number | null;
  toggleFAQ: (index: number) => void;
  colors: typeof colors;
}> = ({ faq, index, openIndex, toggleFAQ, colors }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
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
        {faq.answerJSX ? faq.answerJSX : faq.answerText}
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
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
        text: faq.answerText,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Ganga Electricals & Hardwares</title>

        <meta
          name="keywords"
          content="Ganga Pumps, Ganga Electrical and Hardwares, water pumps Bangalore, submersible pumps, electrical store Bangalore, best hardware store in Bengaluru, pressure pumps, plumbing materials, borewell motor sales"
        />

        {/* FAQ structured data for SEO */}
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
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                openIndex={openIndex}
                toggleFAQ={toggleFAQ}
                colors={colors}
              />
            ))}
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
