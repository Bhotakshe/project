import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function Footer() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    setRating(0);
    setReview('');
  };

  return (
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
      {/* Review Section - Added at the top */}
      <div className="max-w-2xl mx-auto px-4 mb-16">
        <h2 className="text-blue-600 text-2xl font-bold text-center mb-8">Ulasan Pelanggan</h2>
        
        {/* Review Form */}
        <form onSubmit={handleSubmitReview} className="mb-12">
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
            className="w-full p-4 border rounded-lg mb-4 text-gray-600"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Kirim Ulasan
          </button>
        </form>

        {/* Example Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-600 mb-2">Seragam berkualitas bagus, jahitan rapi!</p>
            <p className="text-sm text-gray-500">- Rina S.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex mb-2">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
              <Star className="h-5 w-5 text-gray-300" />
            </div>
            <p className="text-gray-600 mb-2">Pengiriman cepat, harga terjangkau</p>
            <p className="text-sm text-gray-500">- Budi W.</p>
          </div>
        </div>
      </div>

      {/* Rest of the footer content */}
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