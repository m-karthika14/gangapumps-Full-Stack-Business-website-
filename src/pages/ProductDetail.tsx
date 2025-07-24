import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Phone, Mail } from 'lucide-react';
import { useData } from '../context/DataContext';
import { Helmet } from 'react-helmet-async';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, reviews } = useData();

  const product = products.find(p => p._id === id);
  const productReviews = reviews.filter(r => r.productId === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-playfair text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-white mb-4">Product data may still be loading or the ID is incorrect.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-accent text-white px-6 py-2 rounded-lg font-inter hover:bg-opacity-90 transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark pt-24 text-white">
      {/* SEO Head Tags */}
      <Helmet>
        <title>{`${product.name} | Ganga Electrical and Hardwares`}</title>
        <meta name="description" content={product.description || 'High-quality pump and electrical products from trusted brands.'} />
         <meta
    name="keywords"
    content="Ganga Pumps, Ganga Electrical and Hardwares, water pumps Bangalore, submersible pumps, electrical store Bangalore, best hardware store in Bengaluru, pressure pumps, plumbing materials, borewell motor sales"
  />
        <meta property="og:title" content={`${product.name} | Ganga Pumps`} />
        <meta property="og:description" content={product.description || 'High-quality pump and electrical products from trusted brands.'} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={`https://gangapumps.com/product/${id}`} />
        <link
          rel="preload"
          as="image"
          href={product.image}
          fetchPriority="high"
          type="image/jpeg"
        />

          <link
  rel="alternate"
  href="https://gangapumps.com/"
  {...{ hreflang: 'en-IN' }}
/>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Card */}
        <div className="mt-6 bg-white text-dark rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                loading="eager"
                fetchPriority="high"
                className="w-full h-72 sm:h-96 md:h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-inter">
                  {product.category}
                </span>
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-inter">
                  {product.brand}
                </span>
              </div>

              <h1 className="font-playfair text-2xl sm:text-3xl font-bold mb-4">
                {product.name}
              </h1>

              <p className="font-inter text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="font-playfair text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="font-inter text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Review Card */}
        {productReviews.length > 0 && (
          <div className="mt-12 bg-white text-dark rounded-2xl shadow-lg transition-all duration-300 p-6 sm:p-8">
            <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-6">Customer Reviews</h3>
            <div className="space-y-6">
              {productReviews.map((review) => (
                <div key={review._id} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <div className="flex mr-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-accent fill-current" />
                        ))}
                      </div>
                      <span className="font-inter font-semibold">{review.name}</span>
                    </div>
                    <span className="font-inter text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="font-inter text-gray-700 italic">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Card */}
        <div className="mt-12 bg-white text-dark rounded-2xl shadow-lg transition-all duration-300 p-6 sm:p-8">
          <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-4">Interested in this product?</h3>
          <p className="font-inter mb-6">
            Contact us for pricing, availability, and professional installation services.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-center">
              <Phone size={24} className="text-dark mr-4" />
              <div>
                <div className="font-inter font-semibold">Call us</div>
                <div className="font-inter">+91 9986082495</div>
              </div>
            </div>

            <div className="flex items-center">
              <Mail size={24} className="text-dark mr-4" />
              <div>
                <div className="font-inter font-semibold">Email us</div>
                <div className="font-inter">sales@gangapumps.com</div>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto bg-dark text-white px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 shadow-[0_0_10px_#222831] hover:shadow-[0_0_25px_#222831]"
          >
            Get Estimate for this Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
