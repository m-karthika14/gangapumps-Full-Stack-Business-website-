import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SubmersiblePumpsBangalore: React.FC = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ganga Electrical & Hardwares',
    url: 'https://gangapumps.com',
    sameAs: ['https://www.facebook.com/', 'https://www.instagram.com/'],
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Submersible Pumps Bangalore | Reliable Water Pumps</title>
        <meta
          name="description"
          content="Buy submersible pumps in Bangalore for homes and industries. Installation and service available across the city."
        />
        <meta name="keywords" content="submersible pumps bangalore, submersible pump dealer bangalore, borewell pumps bangalore" />
        <link rel="canonical" href="https://gangapumps.com/submersible-pumps-bangalore" />

        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4">Submersible Pumps in Bangalore</h1>

          <p className="text-gray-700 mb-4">We provide a variety of <Link to="/submersible-pump-for-borewell" className="no-underline text-inherit">borewell submersible pumps</Link>, <Link to="/deep-well-submersible-pump" className="no-underline text-inherit">deep well pumps</Link>, and submersible systems for both residential and industrial applications in Bangalore.</p>

          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>High-efficiency submersible motors</li>
            <li>Durable stainless steel construction</li>
            <li>Professional installation and maintenance</li>
          </ul>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Brands We Stock</h2>
            <p className="text-gray-700">We stock trusted brands such as <Link to="/grundfos-pressure-pumps" className="no-underline text-inherit">Grundfos</Link>, CRI and Texmo. <Link to="/grundfos-scala-pump" className="no-underline text-inherit">Learn more about Grundfos Scala</Link>.</p>
          </section>

          <div className="mt-6 flex items-center gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md">Contact Us</Link>
            <Link to="/submersible-pump-dealer-bangalore" className="text-primary font-semibold">Find a dealer →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmersiblePumpsBangalore;
