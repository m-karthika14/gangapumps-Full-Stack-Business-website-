import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PressurePumpsElectronicCity: React.FC = () => {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ganga Electrical & Hardwares',
    description: 'Supplier of pressure pumps and booster pumps in Electronic City Bangalore.',
    areaServed: 'Electronic City, Bangalore',
    serviceType: 'Water Pressure Pumps',
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Pressure Pumps in Electronic City Bangalore | Water Pressure Pumps & Booster Pumps</title>
        <meta
          name="description"
          content="Looking for pressure pumps in Electronic City Bangalore? Discover reliable water pressure pumps and booster pumps for homes, apartments and buildings."
        />
        <meta
          name="keywords"
          content="pressure pumps Electronic City Bangalore, water pressure pump Electronic City, booster pump Electronic City, pressure pump near me Electronic City, apartment pressure pump Electronic City"
        />
        <link rel="canonical" href="https://gangapumps.com/pressure-pumps-electronic-city" />

        <meta property="og:title" content="Pressure Pumps in Electronic City Bangalore" />
        <meta
          property="og:description"
          content="Find reliable pressure pumps and booster pumps in Electronic City Bangalore for homes and apartments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/pressure-pumps-electronic-city" />

        <script type="application/ld+json">{JSON.stringify(localSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4 text-dark">Pressure Pumps in Electronic City Bangalore</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">Electronic City is a fast-growing residential and commercial area; water pressure problems are common in multi-storey buildings. Installing <strong>pressure pumps in Electronic City Bangalore</strong> improves water flow and ensures reliable supply across all floors.</p>

            <p className="text-gray-700 mt-3">We supply domestic pressure pumps, booster systems and submersible solutions. Popular options include <Link to="/grundfos-pressure-pumps" className="no-underline text-inherit">Grundfos pressure pumps</Link> and high-capacity <Link to="/deep-well-submersible-pump" className="no-underline text-inherit">deep well submersible pumps</Link>.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Benefits</h2>
            <p className="text-gray-700">Pressure pumps provide consistent water pressure, improve comfort, and ensure efficient distribution during peak hours. They are ideal for apartments, villas, and commercial buildings.</p>
          </section>

          <div className="mt-6 flex items-center gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md">Contact Us</Link>
            <Link to="/pressure-pumps-bangalore" className="text-primary font-semibold">See all Bangalore areas →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressurePumpsElectronicCity;
