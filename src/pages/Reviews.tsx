import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';
import { useData } from '../context/DataContext';

const Reviews = () => {
  const { reviews, products, addReview } = useData();
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
    productId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addReview(formData);
    setFormData({ name: '', rating: 5, comment: '', productId: '' });
    alert('Thank you for your review!');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.name === 'rating' ? parseInt(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const getProductName = (productId: string) => {
    const product = products.find(p => p._id === productId);
    return product ? product.name : 'General Review';
  };

  return (
    <div className="min-h-screen bg-dark pt-40 pb-16">
      {/* ✅ SEO Helmet */}
      <Helmet>
        <html lang="en" />
        <title>Customer Reviews | Ganga Electrical and Hardwares</title>
        <meta
          name="description"
          content="See what our customers say about Ganga Electricals' products and services. Share your own experience with a quick review!"
        />
         <meta
    name="keywords"
    content="Ganga Pumps, Ganga Electrical and Hardwares, water pumps Bangalore, submersible pumps, electrical store Bangalore, best hardware store in Bengaluru, pressure pumps, plumbing materials, borewell motor sales"
  />
        <link rel="canonical" href="https://gangapumps.com/reviews" />
        <meta property="og:title" content="Customer Reviews | Ganga Electrical and Hardwares" />
        <meta property="og:description" content="See what our customers say about Ganga Electricals. Share your review too!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangapumps.com/reviews" />
        <meta property="og:image" content="/new.avif" />


          <link
  rel="alternate"
  href="https://gangapumps.com/reviews"
  {...{ hreflang: 'en-IN' }}
/>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl font-bold text-white mb-4">Customer Reviews</h1>
          <p className="font-inter text-white/90 text-lg max-w-2xl mx-auto">
            Read what our customers say and share your experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Review Form */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 rounded-2xl shadow-2xl p-6 sticky top-24">
              <h3 className="font-playfair text-xl font-bold text-dark mb-4">Write a Review</h3>
              <form onSubmit={handleSubmit} className="space-y-4" aria-label="Review form">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="font-inter block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 bg-white/90 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-inter"
                  />
                </div>

                {/* Product */}
                <div>
                  <label htmlFor="productId" className="font-inter block text-sm font-medium text-gray-700 mb-1">
                    Product (Optional)
                  </label>
                  <select
                    id="productId"
                    name="productId"
                    value={formData.productId}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 bg-white/90 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-inter"
                  >
                    <option value="">General Review</option>
                    {products.map(product => (
                      <option key={product._id} value={product._id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rating */}
                <div>
                  <label htmlFor="rating" className="font-inter block text-sm font-medium text-gray-700 mb-1">
                    Rating *
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 bg-white/90 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-inter"
                  >
                    {[5, 4, 3, 2, 1].map(rating => (
                      <option key={rating} value={rating}>
                        {rating} Star{rating !== 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Comment */}
                <div>
                  <label htmlFor="comment" className="font-inter block text-sm font-medium text-gray-700 mb-1">
                    Review *
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share your experience..."
                    required
                    className="w-full px-3 py-2 border border-gray-300 bg-white/90 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-inter"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-dark transition-colors font-inter font-medium"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>

          {/* Review List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {reviews.map((review) => {
                const formattedDate = review.date
                  ? new Date(review.date).toLocaleDateString()
                  : '';

                return (
                  <div key={review._id} className="bg-white/90 rounded-2xl shadow-2xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <div className="flex mr-3" aria-label={`Rating: ${review.rating} stars`}>
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} size={18} className="text-accent fill-current" />
                            ))}
                          </div>
                          <span className="font-inter font-semibold text-dark">
                            {review.name || 'Anonymous'}
                          </span>
                        </div>
                        {review.productId && (
                          <span className="font-inter text-sm text-primary">
                            {getProductName(review.productId)}
                          </span>
                        )}
                      </div>
                      <span className="font-inter text-sm text-gray-500">{formattedDate}</span>
                    </div>
                    <p className="font-inter text-gray-700 italic">"{review.comment}"</p>
                  </div>
                );
              })}

              {reviews.length === 0 && (
                <div className="text-center py-12">
                  <p className="font-inter text-gray-600 text-lg">
                    No reviews yet. Be the first to share your experience!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
