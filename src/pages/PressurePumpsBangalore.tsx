import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PressurePumpsBangalore: React.FC = () => {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ganga Electrical & Hardwares',
    description: 'Supplier of pressure pumps, booster pumps and water pumps in Bangalore.',
    areaServed: 'Bangalore',
    serviceType: 'Water Pressure Pumps',
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Pressure Pumps in Bangalore | Water Pressure Pumps & Booster Pumps</title>
        <meta
          name="description"
          content="Looking for pressure pumps in Bangalore? Discover reliable water pressure pumps and booster pumps for homes, apartments and buildings."
        />
        <meta
          name="keywords"
          content="pressure pumps bangalore, water pressure pump bangalore, booster pump bangalore, pressure pump near me bangalore, apartment pressure pump bangalore"
        />
        <link rel="canonical" href="https://gangapumps.com/pressure-pumps-bangalore" />

        <meta property="og:title" content="Pressure Pumps in Bangalore" />
        <meta
          property="og:description"
          content="Find the best pressure pumps and booster pumps in Bangalore for homes, apartments and commercial buildings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/pressure-pumps-bangalore" />

        <script type="application/ld+json">{JSON.stringify(localSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4 text-dark">Pressure Pumps in Bangalore</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">Many homes and apartment buildings experience low water pressure due to plumbing design, building height, or insufficient municipal water supply. Installing <strong>pressure pumps in Bangalore</strong> is one of the most effective ways to improve water flow and maintain consistent pressure throughout the plumbing system.</p>

            <p className="text-gray-700 mt-3">A <strong>water pressure pump</strong> increases the pressure of incoming water so that it reaches every tap, shower, and appliance with sufficient force. These pumps are widely used in residential homes, apartment buildings, hotels, and commercial properties. Explore compact options like the <Link to="/grundfos-scala-pump" className="no-underline text-inherit">Grundfos SCALA pump</Link> or larger booster systems such as <Link to="/grundfos-booster-pump" className="no-underline text-inherit">Grundfos booster pump</Link>.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Why Water Pressure Problems Occur</h2>
            <p className="text-gray-700">Low water pressure is a common issue in urban areas. Causes include multi-storey buildings, long plumbing pipelines, shared water supply systems, insufficient municipal water pressure, and high water demand during peak hours.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Benefits of Installing Pressure Pumps</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Consistent water pressure across all outlets</li>
              <li>Improved comfort and appliance performance</li>
              <li>Reliable distribution during peak demand</li>
              <li>Energy-efficient operation with modern controllers</li>
            </ul>
            <p className="text-gray-700 mt-3">We supply trusted brands including <Link to="/grundfos-pressure-pumps" className="no-underline text-inherit">Grundfos pressure pumps</Link>, <Link to="/submersible-pumps-bangalore" className="no-underline text-inherit">submersible pumps</Link>, and other commercial solutions.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Areas We Serve</h2>
            <p className="text-gray-700">We supply pressure pumps in Bangalore including <Link to="/pressure-pumps-whitefield" className="no-underline text-inherit">Whitefield</Link>, <Link to="/pressure-pumps-btm" className="no-underline text-inherit">BTM Layout</Link>, <Link to="/pressure-pumps-hsr-layout" className="no-underline text-inherit">HSR Layout</Link>, Electronic City and Marathahalli.</p>
          </section>

          <div className="mt-6 flex items-center gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md">Contact Us</Link>
            <Link to="/pressure-pumps-btm" className="text-primary font-semibold">See BTM pumps →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressurePumpsBangalore;
