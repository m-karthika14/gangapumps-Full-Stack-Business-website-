import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const GrundfosScalaPump: React.FC = () => {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Grundfos SCALA Pump',
    description:
      'Grundfos SCALA pumps are compact water pressure booster pumps designed for residential water supply systems.',
    brand: {
      '@type': 'Brand',
      name: 'Grundfos',
    },
    category: 'Water Pressure Pump',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a Grundfos SCALA pump?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Grundfos SCALA pump is a compact, all-in-one pressure booster designed for residential water systems with intelligent pressure control.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can SCALA pumps be used in apartments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. SCALA pumps (including the SCALA2) are suitable for homes and apartments where consistent pressure is required.',
        },
      },
    ],
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Grundfos SCALA Pump | SCALA2 Water Pressure Booster Pump Guide</title>
        <meta
          name="description"
          content="Learn about the Grundfos SCALA pump and SCALA2 booster pump designed to maintain consistent water pressure in homes and apartments."
        />
        <meta
          name="keywords"
          content="grundfos scala pump, grundfos scala2 pump, grundfos scala booster pump, grundfos water pressure pump for home, scala pressure pump"
        />
        <link rel="canonical" href="https://gangapumps.com/grundfos-scala-pump" />
        <meta property="og:title" content="Grundfos SCALA Pump Guide" />
        <meta
          property="og:description"
          content="Discover how the Grundfos SCALA pump improves water pressure in homes, apartments and residential buildings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/grundfos-scala-pump" />

        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4 text-dark">Grundfos SCALA Pump</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">
              The <strong>Grundfos SCALA pump</strong> is one of the most advanced water pressure booster pumps designed for residential use. Known for its compact design and intelligent pressure control system, the pump ensures stable water pressure throughout the home.
            </p>

            <p className="text-gray-700 mt-3">
              Many homes and apartments experience low water pressure. Installing a <strong>Grundfos SCALA2 pressure pump</strong> helps maintain consistent water flow for showers, taps, washing machines, and other appliances. See related solutions like <Link to="/grundfos-pressure-pumps" className="no-underline text-inherit">Grundfos pressure pumps</Link> and our <Link to="/pressure-pump-for-home" className="no-underline text-inherit">pressure pump for home</Link> options.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">What is a Grundfos SCALA Pump</h2>
            <p className="text-gray-700">The <strong>Grundfos SCALA booster pump</strong> is a self-priming pressure pump designed to increase water pressure in domestic water systems. It automatically adjusts pressure depending on water demand.</p>
            <p className="text-gray-700 mt-3">This makes it an ideal <strong>water pressure pump for homes and apartments</strong>. For dealer support and parts in Bangalore, visit our <Link to="/grundfos-pump-dealer-bangalore" className="no-underline text-inherit">Grundfos pump dealer Bangalore</Link> page.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Intelligent pressure control</li>
              <li>Compact all-in-one design</li>
              <li>Quiet operation</li>
              <li>Energy efficient performance</li>
            </ul>
            <p className="text-gray-700 mt-3">We also offer submersible options for borewells — see <Link to="/submersible-pump-for-borewell" className="no-underline text-inherit">submersible pump for borewell</Link>.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Areas We Serve in Bangalore</h2>
            <p className="text-gray-700">We supply <strong>Grundfos SCALA pumps in Bangalore</strong> including Whitefield, BTM Layout, HSR Layout, Electronic City, Marathahalli, Indiranagar and Yelahanka. Popular service area: <Link to="/pressure-pumps-whitefield" className="no-underline text-inherit">Whitefield</Link>.</p>
          </section>

          <div className="mt-6 flex items-center gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md">Contact Us</Link>
            <Link to="/grundfos-pressure-pumps" className="text-primary font-semibold">More Grundfos pumps →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrundfosScalaPump;
