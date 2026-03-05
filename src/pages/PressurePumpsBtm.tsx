import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PressurePumpsBtm: React.FC = () => {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ganga Electrical & Hardwares',
    description: 'Supplier of pressure pumps and booster pumps in BTM Layout Bangalore.',
    areaServed: 'BTM Layout, Bangalore',
    serviceType: 'Water Pressure Pumps',
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Pressure Pumps in BTM Bangalore | Water Pressure Pumps & Booster Pumps</title>
        <meta
          name="description"
          content="Looking for pressure pumps in BTM Bangalore? Discover reliable water pressure pumps and booster pumps for homes, apartments and buildings."
        />
        <meta
          name="keywords"
          content="pressure pumps BTM, water pressure pump BTM Bangalore, booster pump BTM Layout, pressure pump near me BTM, apartment pressure pump BTM"
        />
        <link rel="canonical" href="https://gangapumps.com/pressure-pumps-btm" />

        <meta property="og:title" content="Pressure Pumps in BTM Bangalore" />
        <meta
          property="og:description"
          content="Find the best pressure pumps and booster pumps in BTM Layout Bangalore for homes and apartments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/pressure-pumps-btm" />

        <script type="application/ld+json">{JSON.stringify(localSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4 text-dark">Pressure Pumps in BTM Bangalore</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">Many homes and apartment buildings in BTM Layout experience low water pressure due to plumbing design, building height, and shared municipal supplies. Installing <strong>pressure pumps in BTM Bangalore</strong> helps improve water flow and maintain consistent pressure across the building.</p>

            <p className="text-gray-700 mt-3">A <strong>water pressure pump</strong> increases pressure so that taps, showers and appliances receive adequate flow. For apartment setups consider our <Link to="/pressure-pump-for-apartment" className="no-underline text-inherit">pressure pump for apartment</Link> solutions or the compact <Link to="/grundfos-scala-pump" className="no-underline text-inherit">Grundfos SCALA pump</Link>.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Why Water Pressure Problems Occur in BTM</h2>
            <p className="text-gray-700">BTM Layout is densely populated; long pipelines and multi-storey buildings can result in low pressure. Shared water supplies and peak-hour demand also impact flow.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Benefits of Installing Pressure Pumps</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Consistent pressure across all floors</li>
              <li>Improved shower and appliance performance</li>
              <li>Reduced pressure fluctuations during peak use</li>
            </ul>
            <p className="text-gray-700 mt-3">We provide trusted brands and installation services. See our <Link to="/grundfos-pressure-pumps" className="no-underline text-inherit">Grundfos pressure pumps</Link> and <Link to="/submersible-pumps-bangalore" className="no-underline text-inherit">submersible pumps</Link> for larger systems.</p>
          </section>

          <div className="mt-6 flex items-center gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md">Contact Us</Link>
            <Link to="/pressure-pumps-bangalore" className="text-primary font-semibold">See Bangalore range →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressurePumpsBtm;
