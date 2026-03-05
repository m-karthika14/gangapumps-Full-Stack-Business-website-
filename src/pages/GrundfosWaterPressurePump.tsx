import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const GrundfosWaterPressurePump: React.FC = () => {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Grundfos Water Pressure Pump',
    description:
      'Grundfos water pressure pumps improve water flow and maintain consistent pressure in residential and commercial plumbing systems.',
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
        name: 'What is a Grundfos water pressure pump?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Grundfos water pressure pump is designed to increase water pressure in plumbing systems and maintain consistent water flow.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where are Grundfos pressure pumps used?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'They are commonly used in homes, apartments, hotels, and commercial buildings where water pressure needs improvement.',
        },
      },
    ],
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Grundfos Water Pressure Pump | Reliable Pressure Pump for Homes & Buildings</title>

        <meta
          name="description"
          content="Discover Grundfos water pressure pumps designed to improve water pressure in homes, apartments and buildings. Learn how Grundfos pressure pumps ensure reliable water supply."
        />

        <meta
          name="keywords"
          content="grundfos water pressure pump, grundfos pressure pump, grundfos booster pump for home, grundfos pump bangalore, water pressure pump grundfos"
        />

        <link rel="canonical" href="https://gangapumps.com/grundfos-water-pressure-pump" />

        <meta property="og:title" content="Grundfos Water Pressure Pump Guide" />

        <meta
          property="og:description"
          content="Complete guide to Grundfos water pressure pumps used in homes and apartment buildings."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://gangapumps.com/grundfos-water-pressure-pump" />

        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4 text-dark">Grundfos Water Pressure Pump</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">A <strong>Grundfos water pressure pump</strong> is designed to improve water flow and maintain consistent pressure in residential and commercial plumbing systems. In many homes and buildings, water pressure from municipal supply or borewell systems may not be sufficient to deliver strong water flow to all taps and fixtures.</p>

            <p className="text-gray-700 mt-3">Installing a <strong>Grundfos pressure pump</strong> helps increase water pressure and ensures reliable water supply throughout the building. Learn about other solutions such as the <Link to="/grundfos-scala-pump" className="no-underline text-inherit">Grundfos SCALA pump</Link> or our <Link to="/grundfos-booster-pump" className="no-underline text-inherit">Grundfos booster pump</Link> lines.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Why Choose a Grundfos Water Pressure Pump</h2>
            <p className="text-gray-700">Grundfos pumps are known worldwide for their reliability, energy efficiency, and innovative design.</p>

            <h3 className="font-semibold mt-3">Consistent Water Pressure</h3>
            <p className="text-gray-700">A <strong>Grundfos water pressure pump</strong> ensures stable water flow in showers, kitchen taps, washing machines, and other appliances.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Applications</h2>
            <p className="text-gray-700">Grundfos pumps are used in homes, apartments, villas, hotels, and commercial buildings. For apartment-specific installs see <Link to="/pressure-pump-for-apartment" className="no-underline text-inherit">pressure pump for apartment</Link>, or for local supply in BTM Layout visit <Link to="/pressure-pumps-btm" className="no-underline text-inherit">Pressure Pumps BTM</Link>.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Installation</h2>
            <p className="text-gray-700">Proper installation ensures optimal pump performance. Pressure pumps are usually installed near the main water supply line or storage tank. For larger installations we also offer <Link to="/submersible-pumps-bangalore" className="no-underline text-inherit">submersible pumps</Link> and deep-well solutions.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Areas We Serve in Bangalore</h2>
            <p className="text-gray-700">We supply <strong>Grundfos water pressure pumps in Bangalore</strong> including Whitefield, BTM Layout, HSR Layout, Electronic City, Marathahalli, Indiranagar and Yelahanka.</p>
          </section>

          <div className="mt-6 flex items-center gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md">Contact Us</Link>
            <Link to="/grundfos-pressure-pumps" className="text-primary font-semibold">See Grundfos product range →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrundfosWaterPressurePump;
