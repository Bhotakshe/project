import React from 'react';

export default function Footer() {
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

        {/* Copyright Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            © 2025 TOKO RR. All rights reserved.
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