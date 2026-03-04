import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const posts = [
  {
    title: 'Pressure Pumps in Bangalore – Complete Buying Guide',
    slug: 'pressure-pumps-in-bangalore',
    description: 'Types of pumps, best models for homes & apartments, installation tips, and where to buy in Bangalore.'
  },
  {
    title: 'Best Water Pressure Pump for Apartments in Bangalore',
    slug: 'best-water-pressure-pump-apartment-bangalore',
    description: 'Common apartment problems and the best booster pump solutions and models.'
  },
  {
    title: 'How to Increase Water Pressure in Apartments',
    slug: 'how-to-increase-water-pressure-apartment',
    description: 'Reasons for low pressure, pump options, and pipe/tank fixes.'
  },
  {
    title: 'Best Booster Pump for Home Water Pressure',
    slug: 'best-booster-pump-home',
    description: 'Booster pump basics, recommended models and when to install one.'
  },
  {
    title: 'Grundfos Scala2 Pump Review',
    slug: 'grundfos-scala2-review',
    description: 'Overview, features, benefits, installation and why it is popular.'
  },
  {
    title: 'Water Pressure Pump Installation in Bangalore',
    slug: 'water-pressure-pump-installation-bangalore',
    description: 'Installation steps, expected costs in Bangalore and maintenance tips.'
  }
];

const Blogs = () => {
  return (
    // Use paddingTop instead of marginTop so the white background covers the area above the card
    <div style={{ paddingTop: '3cm' }} className="bg-white">
      <Helmet>
        <title>Blog | Ganga Electrical & Hardwares</title>
        <meta name="description" content="Read expert articles about pressure pumps, installation and buying guides in Bangalore." />
        <link rel="canonical" href="https://gangapumps.com/blogs" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-dark">
          <h1 className="text-4xl font-bold mb-6 text-dark">From the Ganga Pumps Blog</h1>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="bg-transparent p-0">
              <h2 className="text-xl font-semibold mb-2 text-dark">
                <Link to={`/blogs/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-700 mb-4">{post.description}</p>
              <Link to={`/blogs/${post.slug}`} className="text-primary font-semibold">
                Read more →
              </Link>
            </article>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
