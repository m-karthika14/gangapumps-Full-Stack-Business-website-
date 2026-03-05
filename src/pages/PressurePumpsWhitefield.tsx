import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PressurePumpsWhitefield: React.FC = () => {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ganga Electrical & Hardwares',
    description: 'Supplier of pressure pumps and booster pumps in Whitefield Bangalore.',
    areaServed: 'Whitefield, Bangalore',
    serviceType: 'Water Pressure Pumps',
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Pressure Pumps in Whitefield Bangalore | Water Pressure Pumps & Booster Pumps</title>
        <meta
          name="description"
          content="Looking for pressure pumps in Whitefield Bangalore? Discover reliable water pressure pumps and booster pumps for homes, apartments and buildings."
        />
        <meta
          name="keywords"
          content="pressure pumps Whitefield Bangalore, water pressure pump Whitefield, booster pump Whitefield, pressure pump near me Whitefield, apartment pressure pump Whitefield"
        />
        <link rel="canonical" href="https://gangapumps.com/pressure-pumps-whitefield" />

        <meta property="og:title" content="Pressure Pumps in Whitefield Bangalore" />
        <meta
          property="og:description"
          content="Find reliable pressure pumps and booster pumps in Whitefield Bangalore for homes and apartments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/pressure-pumps-whitefield" />

        <script type="application/ld+json">{JSON.stringify(localSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4 text-dark">Pressure Pumps in Whitefield Bangalore</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">Whitefield is a major residential and IT hub. Installing <strong>pressure pumps in Whitefield Bangalore</strong> helps residents and businesses overcome low water pressure caused by long pipelines and multi-storey buildings.</p>

            <p className="text-gray-700 mt-3">We offer domestic and booster pump systems as well as submersible solutions. Check out our <Link to="/grundfos-pressure-pumps" className="no-underline text-inherit">Grundfos pressure pumps</Link> and <Link to="/deep-well-submersible-pump" className="no-underline text-inherit">deep well submersible pumps</Link> for larger installations.</p>
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

export default PressurePumpsWhitefield;
