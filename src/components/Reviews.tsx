import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import axios from 'axios';

const colors = {
  dark: '#183B4E',
  cream: '#F3F3E0',
  gold: '#DDA853',
};

// Set a cutoff date — only reviews added after this will show date
const cutoffDate = new Date('2025-07-24'); // Change this to your deployment date

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="py-16 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#183B4E] mb-4">
            Customer Reviews
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            What our satisfied customers say about us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">No reviews yet.</p>
          ) : (
            reviews.map((review, index) => {
              const { name, comment, rating, date } = review;

              const reviewDate = new Date(date);
              const showDate = date && reviewDate > cutoffDate;

              return (
                <div
                  key={index}
                  className="p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300"
                  style={{
                    background: 'linear-gradient(145deg, #1e475d, #183B4E)',
                    color: colors.cream,
                    boxShadow: '0 6px 25px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <div className="flex mb-3">
                    {[...Array(rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="mr-1"
                        color={colors.gold}
                        fill={colors.gold}
                      />
                    ))}
                  </div>
                  <p className="italic text-sm sm:text-base mb-4 break-words">"{comment}"</p>
                  <div>
                    <div className="font-semibold text-base sm:text-lg">{name}</div>
                    {showDate && (
                      <div className="text-sm text-gray-300 mt-1">
                        {reviewDate.toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
