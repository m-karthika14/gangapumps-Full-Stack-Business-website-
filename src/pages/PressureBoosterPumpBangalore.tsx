import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PressureBoosterPumpBangalore: React.FC = () => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pressure Booster Pump Installation Bangalore',
    description: 'Supply and installation of pressure booster pumps for homes, apartments and buildings in Bangalore.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Ganga Electrical & Hardwares',
      areaServed: 'Bangalore',
    },
    serviceType: 'Water Pressure Booster Pump',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a pressure booster pump?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A pressure booster pump increases water pressure in plumbing systems and ensures consistent water flow across multiple outlets.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where are booster pumps used?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Booster pumps are commonly used in homes, apartments, hotels, and commercial buildings where water pressure needs improvement.',
        },
      },
    ],
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Pressure Booster Pump in Bangalore | Water Pressure Booster Pump Solutions</title>
        <meta
          name="description"
          content="Looking for a pressure booster pump in Bangalore? Discover reliable booster pumps for homes, apartments and buildings to improve water pressure."
        />
        <meta
          name="keywords"
          content="pressure booster pump bangalore, water pressure booster pump bangalore, booster pump for apartment bangalore, booster pump installation bangalore, water pressure pump bangalore"
        />
        <link rel="canonical" href="https://gangapumps.com/pressure-booster-pump-bangalore" />

        <meta property="og:title" content="Pressure Booster Pump in Bangalore" />
        <meta
          property="og:description"
          content="Improve water pressure in homes and apartments with reliable pressure booster pumps in Bangalore."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/pressure-booster-pump-bangalore" />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4 text-dark">Pressure Booster Pump in Bangalore</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">
              Many homes and apartment buildings experience low water pressure due to long pipelines, building height, or inconsistent municipal water supply. Installing a <strong>pressure booster pump in Bangalore</strong> is one of the most effective ways to improve water flow and maintain consistent pressure throughout the plumbing system.
            </p>

            <p className="text-gray-700 mt-3">A <strong>water pressure booster pump</strong> increases the pressure of incoming water and ensures strong water flow in showers, taps, and appliances. These pumps are commonly installed in residential houses, apartments, and commercial buildings. For larger well-driven systems see our <Link to="/deep-well-submersible-pump" className="no-underline text-inherit">Deep Well Submersible Pump</Link> options.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Why Water Pressure Problems Occur</h2>
            <p className="text-gray-700">Low water pressure can happen for several reasons including long pipelines, shared supply systems, and high demand during peak hours. Installing a <Link to="/pressure-pump-for-apartment" className="no-underline text-inherit">pressure pump for apartment</Link> or home system solves these issues.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Benefits of Installing a Pressure Booster Pump</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Strong water pressure across all taps</li>
              <li>Improved comfort for residents</li>
              <li>Reliable water supply during peak hours</li>
              <li>Energy efficient operation with modern controllers</li>
            </ul>
            <p className="text-gray-700 mt-3">We supply brands including <Link to="/grundfos-pressure-pumps" className="no-underline text-inherit">Grundfos pressure pumps</Link> for reliable performance.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Areas We Serve in Bangalore</h2>
            <p className="text-gray-700">We install <strong>pressure booster pumps in Bangalore</strong> across major areas including <Link to="/pressure-pumps-whitefield" className="no-underline text-inherit">Whitefield</Link>, <Link to="/pressure-pumps-btm" className="no-underline text-inherit">BTM Layout</Link>, HSR Layout, Electronic City and Marathahalli.</p>
            <p className="text-gray-700 mt-3">For commercial booster setups and dealer enquiries visit our <Link to="/grundfos-pump-dealer-bangalore" className="no-underline text-inherit">Grundfos pump dealer Bangalore</Link> page.</p>
          </section>

          <div className="mt-6 flex items-center gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md">Contact Us</Link>
            <Link to="/pressure-pumps-bangalore" className="text-primary font-semibold">Learn about local pressure pumps →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressureBoosterPumpBangalore;
