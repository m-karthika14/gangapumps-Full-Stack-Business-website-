import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SubmersiblePumpForBorewell: React.FC = () => {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Submersible Pump for Borewell',
    description: 'Submersible pumps designed for borewell water extraction and groundwater supply.',
    brand: {
      '@type': 'Brand',
      name: 'Grundfos, CRI, Texmo',
    },
    category: 'Water Pump',
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Submersible Pump for Borewell | Borewell Water Pump Solutions</title>
        <meta
          name="description"
          content="Learn about submersible pumps for borewells used to extract groundwater efficiently. Discover reliable borewell water pump systems for homes and buildings."
        />
        <meta
          name="keywords"
          content="submersible pump for borewell, borewell submersible pump, borewell water pump, borewell pump system, borewell pump bangalore"
        />
        <link rel="canonical" href="https://gangapumps.com/submersible-pump-for-borewell" />

        <meta property="og:title" content="Submersible Pump for Borewell" />
        <meta
          property="og:description"
          content="Complete guide to borewell submersible pumps and how they provide reliable water supply."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/submersible-pump-for-borewell" />

        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4 text-dark">Submersible Pump for Borewell</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">A <strong>submersible pump for borewell</strong> is one of the most efficient solutions for extracting groundwater from deep underground sources. These pumps operate fully submerged and push water upward through pipes to storage tanks or plumbing systems.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">How Borewell Pumps Work</h2>
            <p className="text-gray-700">Borewell pumps are installed below the water level and push water upward through multiple impellers. This design avoids cavitation and increases efficiency. For deep installations consider <Link to="/deep-well-submersible-pump" className="no-underline text-inherit">deep well submersible pumps</Link>.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Choosing the Right Pump</h2>
            <p className="text-gray-700">Selecting the correct borewell pump depends on borewell depth, water table, required flow rate and motor capacity. We stock trusted brands such as <Link to="/grundfos-pressure-pumps" className="no-underline text-inherit">Grundfos</Link> and <Link to="/submersible-pumps-bangalore" className="no-underline text-inherit">CRI</Link> models.</p>
          </section>

          <div className="mt-6 flex items-center gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md">Contact Us</Link>
            <Link to="/submersible-pumps-bangalore" className="text-primary font-semibold">See submersible pumps →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmersiblePumpForBorewell;
