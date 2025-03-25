import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function Footer() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([
    { rating: 5, text: "Seragam berkualitas bagus, jahitan rapi!", author: "Rina S." },
    { rating: 4, text: "Pengiriman cepat, harga terjangkau", author: "Budi W." }
  ]);

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

  return (
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* TOKO RR Section */}
          <div>
            <h3 className="text-blue-600 text-xl font-bold mb-4">TOKO RR</h3>
            <div className="text-gray-600 space-y-2">
              <p>Jl.Thamrin 5,RT 004/RW 004, Ketapang, Kec. Cipondoh, Kota Tangerang, Banten</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-blue-600 text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-red-600 transition">Beranda</a>
              </li>
              <li>
                <a href="/produk" className="text-gray-600 hover:text-blue-600 transition">Produk</a>
              </li>
              <li>
                <a href="/tentang" className="text-gray-600 hover:text-blue-600 transition">Tentang</a>
              </li>
              <li>
                <a href="/kontak" className="text-gray-600 hover:text-blue-600 transition">Kontak</a>
              </li>
            </ul>
          </div>

          {/* Ikuti Kami Section */}
          <div>
            <h3 className="text-blue-600 text-xl font-bold mb-4">Ikuti Kami</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://shopee.co.id/toko_po_roil77" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition"
              >
                <img 
                  src="/Gambar/Shopee_1.png" 
                  alt="Shopee" 
                  className="w-8 h-8"
                />
                <span>Shopee</span>
              </a>
              <a 
                href="https://tiktok.com/@roil_olshop19" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition"
              >
                <img 
                  src="/Gambar/tiktok_2.jpg" 
                  alt="TikTok" 
                  className="w-8 h-8"
                />
                <span>TikTok</span>
              </a>
              <a 
                href="https://wa.me/6281286383535" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition"
              >
                <img 
                  src="/Gambar/whatsapp.png" 
                  alt="WhatsApp" 
                  className="w-8 h-8"
                />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 border-t border-gray-100 pt-8">
          <h3 className="text-blue-600 text-xl font-bold mb-6 text-center">Ulasan Pelanggan</h3>
          
          {/* Review Form */}
          <form onSubmit={handleSubmitReview} className="max-w-lg mx-auto mb-8">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`p-1 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  <Star className="h-8 w-8 fill-current" />
                </button>
              ))}
            </div>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Bagikan pengalaman Anda..."
              className="w-full p-3 border rounded-lg mb-4"
              rows={3}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Kirim Ulasan
            </button>
          </form>

          {/* Review List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-2">{review.text}</p>
                <p className="text-sm text-gray-500">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            © 2025 TOKO RR.
          </p>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/6281286383535"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <img 
            src="/Gambar/whatsapp-white.png" 
            alt="Chat on WhatsApp" 
            className="w-6 h-6"
          />
          <span>Chat</span>
        </div>
      </a>
    </footer>
  );
}