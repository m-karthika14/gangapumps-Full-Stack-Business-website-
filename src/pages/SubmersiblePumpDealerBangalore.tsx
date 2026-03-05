import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SubmersiblePumpDealerBangalore: React.FC = () => {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ganga Electrical & Hardwares',
    description: 'Supplier of borewell and deep well submersible pumps in Bangalore.',
    areaServed: 'Bangalore',
    serviceType: 'Submersible Pump Supplier',
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Submersible Pump Dealer in Bangalore | Borewell & Deep Well Pumps</title>
        <meta
          name="description"
          content="Looking for a submersible pump dealer in Bangalore? Find reliable borewell and deep well submersible pumps for homes, apartments and agricultural use."
        />
        <meta
          name="keywords"
          content="submersible pump dealer bangalore, submersible pumps bangalore, borewell submersible pump bangalore, submersible pump supplier bangalore, deep well pump bangalore"
        />
        <link rel="canonical" href="https://gangapumps.com/submersible-pump-dealer-bangalore" />

        <meta property="og:title" content="Submersible Pump Dealer in Bangalore" />
        <meta
          property="og:description"
          content="Find reliable submersible pump dealers in Bangalore supplying borewell and deep well pumps."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/submersible-pump-dealer-bangalore" />

        <script type="application/ld+json">{JSON.stringify(localSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4 text-dark">Submersible Pump Dealer in Bangalore</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">Submersible pumps are widely used for pumping water from borewells, deep wells, and underground water sources. If you are looking for a <strong>submersible pump dealer in Bangalore</strong>, it's important to choose a trusted supplier that offers reliable pump solutions for residential, commercial, and agricultural applications.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">What we supply</h2>
            <p className="text-gray-700">We supply borewell submersible pumps, deep well pumps, and domestic submersible units. See product pages for <Link to="/submersible-pump-for-borewell" className="no-underline text-inherit">borewell submersible pumps</Link>, <Link to="/deep-well-submersible-pump" className="no-underline text-inherit">deep well submersible pumps</Link>, and our wider <Link to="/submersible-pumps-bangalore" className="no-underline text-inherit">submersible pumps range</Link>.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Why choose us</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Authorized dealer for leading pump brands</li>
              <li>Professional installation and after-sales support</li>
              <li>Local service across Bangalore</li>
            </ul>
            <p className="text-gray-700 mt-3">For commercial enquiries see our <Link to="/grundfos-pump-dealer-bangalore" className="no-underline text-inherit">Grundfos pump dealer Bangalore</Link> page.</p>
          </section>

          <div className="mt-6 flex items-center gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md">Contact Us</Link>
            <Link to="/submersible-pumps-bangalore" className="text-primary font-semibold">View submersible pumps →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmersiblePumpDealerBangalore;
