import React from 'react';
import { Star } from 'lucide-react';
import { useData } from '../context/DataContext';
import { useInView } from 'react-intersection-observer';

const cutoffDate = new Date('2025-07-24'); // Date after which review dates are shown

const ReviewCard = ({ review }: { review: any }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const name = review.name || 'Anonymous';
  const comment = review.comment || 'No comment provided.';

  const reviewDate = review.date ? new Date(review.date) : null;

  const showDate =
    reviewDate && reviewDate.getTime() >= cutoffDate.setHours(0, 0, 0, 0);

  const formattedDate = showDate
    ? reviewDate.toLocaleDateString()
    : null;

  return (
    <div
      ref={ref}
      className={`bg-dark p-6 rounded-lg transform transition-all duration-500 ${
        inView ? 'animate-fade-up' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="flex mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={18} className="text-accent fill-current" />
        ))}
      </div>
      <p className="font-inter text-white/90 mb-4 italic">"{comment}"</p>
      <div>
        <div className="font-inter font-semibold text-white">{name}</div>
        {formattedDate && (
          <div className="font-inter text-sm text-gray-500">{formattedDate}</div>
        )}
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  const { reviews } = useData();

  const fiveStarReviews = reviews
    .filter((review) => review.rating === 5)
    .slice(0, 4);

  return (
    <>
      <style>{`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark mb-4">
              Customer Reviews
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
              What our satisfied customers say about us
            </p>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="sm:hidden -mx-2">
            <div className="flex space-x-4 overflow-x-auto px-2 snap-x snap-mandatory scrollbar-hide">
              {fiveStarReviews.map((review) => (
                <div
                  key={review._id}
                  className="min-w-[85%] snap-center flex-shrink-0"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>

            {/* Swipe Message */}
            <div className="text-center text-gray-800 text-sm mt-4 sm:hidden font-inter">
              Swipe <span className="inline-block animate-pulse ml-1">→</span>
            </div>
          </div>

          {/* Grid Layout for Tablet and Up */}
          <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fiveStarReviews.length === 0 ? (
              <p className="col-span-full text-center text-gray-500">
                No 5-star reviews yet.
              </p>
            ) : (
              fiveStarReviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsSection;
