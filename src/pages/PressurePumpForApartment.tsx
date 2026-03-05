import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PressurePumpForApartment: React.FC = () => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Apartment Water Pressure Pump',
    description: 'Installation and supply of pressure pumps for apartments to improve water pressure in multi-storey buildings.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Ganga Electrical & Hardwares',
      areaServed: 'Bangalore',
    },
    serviceType: 'Apartment Water Pressure Pump Installation',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a pressure pump for apartments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A pressure pump is a device that increases water pressure in apartment plumbing systems to ensure consistent water flow.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do apartments need pressure pumps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Water pressure decreases as water travels upward; booster pumps maintain stable pressure across floors.',
        },
      },
    ],
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Pressure Pump for Apartment | Water Pressure Booster Pump for Apartments</title>
        <meta
          name="description"
          content="Learn how pressure pumps for apartments improve water pressure in multi-storey buildings. Discover the best booster pump solutions for apartment water supply."
        />
        <meta
          name="keywords"
          content="pressure pump for apartment, water pressure pump for apartment, booster pump for apartment building, apartment water pressure pump, apartment booster pump"
        />
        <link rel="canonical" href="https://gangapumps.com/pressure-pump-for-apartment" />

        <meta property="og:title" content="Pressure Pump for Apartment Water Pressure" />
        <meta
          property="og:description"
          content="Complete guide to pressure pumps for apartments and how they improve water pressure in residential buildings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/pressure-pump-for-apartment" />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4 text-dark">Pressure Pump for Apartment</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">Water pressure problems are common in apartment buildings, especially in multi-storey structures where water needs to travel through long pipelines and reach higher floors. Installing a <strong>pressure pump for apartment water supply</strong> helps maintain consistent water pressure throughout the building.</p>

            <p className="text-gray-700 mt-3">Many apartment complexes use <strong>water pressure booster pumps for apartments</strong> to improve water supply. For larger installations see our <Link to="/pressure-booster-pump-bangalore" className="no-underline text-inherit">Pressure Booster Pump in Bangalore</Link> guidance.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Why Apartments Need Pressure Pumps</h2>
            <p className="text-gray-700">Water pressure often decreases as water travels upward in apartment buildings. Installing a <Link to="/pressure-pump-for-home" className="no-underline text-inherit">pressure pump for home</Link> or apartment system helps increase pressure and maintain stable water flow.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Types of Pressure Pumps for Apartments</h2>
            <p className="text-gray-700">Different systems include domestic pressure pumps, booster systems, and automatic pressure pumps. We recommend trusted brands such as <Link to="/grundfos-pressure-pumps" className="no-underline text-inherit">Grundfos pressure pumps</Link> for reliable operation.</p>
            <p className="text-gray-700 mt-3">For local service in BTM Layout check <Link to="/pressure-pumps-btm" className="no-underline text-inherit">Pressure Pumps BTM</Link>.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Installation</h2>
            <p className="text-gray-700">Professional installation near the main water line or storage tank ensures correct connections and safe wiring. For submersible needs see <Link to="/submersible-pumps-bangalore" className="no-underline text-inherit">Submersible Pumps Bangalore</Link>.</p>
          </section>

          <div className="mt-6 flex items-center gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md">Contact Us</Link>
            <Link to="/pressure-pumps-bangalore" className="text-primary font-semibold">Our local pump range →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressurePumpForApartment;
