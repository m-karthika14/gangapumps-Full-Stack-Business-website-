import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PressurePumpsHsrLayout: React.FC = () => {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ganga Electrical & Hardwares',
    description: 'Supplier of pressure pumps and booster pumps in HSR Layout Bangalore.',
    areaServed: 'HSR Layout, Bangalore',
    serviceType: 'Water Pressure Pumps',
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Pressure Pumps in HSR Layout Bangalore | Water Pressure Pumps & Booster Pumps</title>
        <meta
          name="description"
          content="Looking for pressure pumps in HSR Layout Bangalore? Discover reliable water pressure pumps and booster pumps for homes, apartments and buildings."
        />
        <meta
          name="keywords"
          content="pressure pumps HSR Layout Bangalore, water pressure pump HSR Layout, booster pump HSR Layout, pressure pump near me HSR Layout, apartment pressure pump HSR Layout"
        />
        <link rel="canonical" href="https://gangapumps.com/pressure-pumps-hsr-layout" />

        <meta property="og:title" content="Pressure Pumps in HSR Layout Bangalore" />
        <meta
          property="og:description"
          content="Find reliable pressure pumps and booster pumps in HSR Layout Bangalore for homes and apartments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/pressure-pumps-hsr-layout" />

        <script type="application/ld+json">{JSON.stringify(localSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4 text-dark">Pressure Pumps in HSR Layout Bangalore</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">HSR Layout is a popular residential neighbourhood with many apartment complexes. Low water pressure is common—installing <strong>pressure pumps in HSR Layout Bangalore</strong> helps maintain consistent pressure across all floors.</p>

            <p className="text-gray-700 mt-3">We provide domestic and booster pump systems, including <Link to="/grundfos-pressure-pumps" className="no-underline text-inherit">Grundfos pressure pumps</Link> and <Link to="/submersible-pumps-bangalore" className="no-underline text-inherit">submersible pumps</Link> for larger needs.</p>
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

export default PressurePumpsHsrLayout;
