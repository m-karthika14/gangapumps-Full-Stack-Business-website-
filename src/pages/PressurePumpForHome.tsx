import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PressurePumpForHome: React.FC = () => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Home Water Pressure Pump',
    description: 'Supply and installation of pressure pumps for homes to improve water pressure in residential plumbing systems.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Ganga Electrical & Hardwares',
      areaServed: 'Bangalore',
    },
    serviceType: 'Home Water Pressure Pump Installation',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a pressure pump for home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A pressure pump is a device that increases water pressure in residential plumbing systems and ensures strong water flow throughout the house.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a pressure pump improve shower pressure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Installing a water pressure booster pump for home use significantly improves shower pressure and water flow.',
        },
      },
    ],
  };

  return (
    <div style={{ paddingTop: '3cm' }} className="bg-white min-h-screen">
      <Helmet>
        <title>Pressure Pump for Home | Water Pressure Booster Pump for Houses</title>
        <meta
          name="description"
          content="Improve water pressure in your house with a pressure pump for home. Discover the best domestic water pressure pumps for reliable water flow."
        />
        <meta
          name="keywords"
          content="pressure pump for home, home water pressure pump, water pressure booster pump for home, domestic pressure pump, house water pressure pump"
        />
        <link rel="canonical" href="https://gangapumps.com/pressure-pump-for-home" />

        <meta property="og:title" content="Pressure Pump for Home Water Supply" />
        <meta
          property="og:description"
          content="Complete guide to pressure pumps for homes and how they improve water pressure in residential plumbing systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/pressure-pump-for-home" />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-3xl font-bold mb-4 text-dark">Pressure Pump for Home</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700">Many houses experience low water pressure due to insufficient municipal supply, long plumbing pipelines, or multi-storey home designs. Installing a <strong>pressure pump for home water supply</strong> is an effective solution for improving water flow and maintaining consistent pressure across all taps and fixtures.</p>

            <p className="text-gray-700 mt-3">Pressure pumps are widely used in residential homes, villas, and independent houses. Explore compact options such as the <Link to="/grundfos-scala-pump" className="no-underline text-inherit">Grundfos SCALA pump</Link> or our range of <Link to="/grundfos-water-pressure-pump" className="no-underline text-inherit">Grundfos water pressure pumps</Link>.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Benefits of Installing a Pressure Pump for Home</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Consistent water pressure throughout the house</li>
              <li>Improved shower and appliance performance</li>
              <li>Reliable water flow during peak usage</li>
              <li>Energy-efficient operation with modern pumps</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Installation and Local Support</h2>
            <p className="text-gray-700">Proper installation near the main water supply or storage tank ensures optimal performance. For dealer support see <Link to="/submersible-pump-dealer-bangalore" className="no-underline text-inherit">Submersible Pump Dealer Bangalore</Link>, or for pumps in Electronic City check <Link to="/pressure-pumps-electronic-city" className="no-underline text-inherit">Pressure Pumps Electronic City</Link>.</p>
          </section>

          <div className="mt-6 flex items-center gap-4">
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md">Contact Us</Link>
            <Link to="/pressure-pumps-bangalore" className="text-primary font-semibold">See local pump options →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressurePumpForHome;
