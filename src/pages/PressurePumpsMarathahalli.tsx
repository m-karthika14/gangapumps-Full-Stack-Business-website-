import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PressurePumpsMarathahalli: React.FC = () => {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ganga Electrical & Hardwares',
    description: 'Supplier of pressure pumps and booster pumps in Marathahalli Bangalore.',
    areaServed: 'Marathahalli, Bangalore',
    serviceType: 'Water Pressure Pumps',
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Pressure Pumps in Marathahalli Bangalore | Water Pressure Pumps & Booster Pumps</title>
        <meta
          name="description"
          content="Looking for pressure pumps in Marathahalli Bangalore? Discover reliable water pressure pumps and booster pumps for homes, apartments and buildings."
        />
        <meta
          name="keywords"
          content="pressure pumps Marathahalli Bangalore, water pressure pump Marathahalli, booster pump Marathahalli, pressure pump near me Marathahalli, apartment pressure pump Marathahalli"
        />
        <link rel="canonical" href="https://gangapumps.com/pressure-pumps-marathahalli" />

        <meta property="og:title" content="Pressure Pumps in Marathahalli Bangalore" />
        <meta
          property="og:description"
          content="Find reliable pressure pumps and booster pumps in Marathahalli Bangalore for homes and apartments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/pressure-pumps-marathahalli" />

        <script type="application/ld+json">{JSON.stringify(localSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4 text-dark">Pressure Pumps in Marathahalli Bangalore</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">Marathahalli is a busy residential and commercial area. Installing <strong>pressure pumps in Marathahalli Bangalore</strong> helps improve water flow and maintain consistent pressure across homes and apartments.</p>

            <p className="text-gray-700 mt-3">We offer domestic pressure pumps, booster systems and installation services. Consider <Link to="/grundfos-pressure-pumps" className="no-underline text-inherit">Grundfos pressure pumps</Link> for efficient operation, or <Link to="/submersible-pumps-bangalore" className="no-underline text-inherit">submersible pumps</Link> for borewell-fed setups.</p>
          </section>

          <div className="mt-6 flex items-center gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md">Contact Us</Link>
            <Link to="/pressure-pumps-bangalore" className="text-primary font-semibold">See Bangalore services →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressurePumpsMarathahalli;
