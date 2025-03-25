import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag, Star, ChevronDown, ChevronUp } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

interface Review {
  rating: number;
  text: string;
  author: string;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    
    setReviews([...reviews, {
      rating,
      text: review,
      author: "Pelanggan"
    }]);
    setRating(0);
    setReview('');
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length 
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          {reviews.length > 0 && (
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= Math.round(averageRating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">({reviews.length})</span>
            </div>
          )}
        </div>
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            {product.price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            Tambah
          </button>
        </div>

        {/* Reviews Section */}
        {isReviewOpen && (
          <div className="mt-4 border-t border-gray-100 pt-4">
            {/* Review Form */}
            <form onSubmit={handleSubmitReview} className="mb-4">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`p-1 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    <Star className="h-5 w-5 fill-current" />
                  </button>
                ))}
              </div>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Bagikan pengalaman Anda dengan produk ini..."
                className="w-full p-2 border rounded-lg mb-2 text-sm"
                rows={2}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm"
              >
                Kirim Ulasan
              </button>
            </form>

            {/* Review List */}
            <div className="space-y-3">
              {reviews.length === 0 ? (
                <p className="text-gray-500 text-sm text-center">Belum ada ulasan untuk produk ini</p>
              ) : (
                reviews.map((review, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">{review.text}</p>
                    <p className="text-xs text-gray-500 mt-1">- {review.author}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}