import React, { useState } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

const carouselItems = [
  {
    id: 1,
    title: "SERAGAM SD",
    subtitle: "Koleksi seragam SD berkualitas dengan harga terjangkau",
    image: "/Gambar/Tampilan SDN.jpeg",
    buttonText: "Lihat Koleksi"
  },
  {
    id: 2,
    title: "SERAGAM SMP",
    subtitle: "Seragam SMP dengan bahan nyaman dan tahan lama",
    image: "/Gambar/Tampilan SMP.jpeg",
    buttonText: "Lihat Koleksi"
  },
  {
    id: 3,
    title: "SERAGAM SMA",
    subtitle: "Seragam SMA dengan desain modern dan elegan",
    image: "/Gambar/Tampilan SMA.jpeg",
    buttonText: "Lihat Koleksi"
  }
];

export default function Navbar({ cartItemCount, onCartClick, onSearch }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  // Auto slide every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center gap-4">
            <div className="flex items-center">
              <a href="/" className="flex items-center hover:opacity-90 transition-opacity">
                <img 
                  src="/Gambar/logo_2.jpg"
                  alt="TOKO RR Logo" 
                  className="h-12 w-auto"
                />
                <span className="ml-2 text-xl font-bold text-gray-800">TOKO RR</span>
              </a>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Cari Produk"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>

            <div className="flex items-center gap-4">
              {/* Cart Button */}
              <button
                onClick={onCartClick}
                className="relative p-2"
                aria-label="Open Cart"
              >
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Join Reseller Button */}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
                Join Reseller
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Carousel Section */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div key={item.id} className="w-full h-full flex-shrink-0 relative">
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-full ${
                  item.title === "SERAGAM SMP" || item.title === "SERAGAM SMA" 
                    ? "object-contain bg-gray-100" 
                    : "object-cover"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 flex flex-col items-center justify-center text-white">
                <h2 className="text-6xl font-bold mb-4 text-shadow-lg">{item.title}</h2>
                <p className="text-2xl mb-8 max-w-3xl text-center text-shadow-md px-4">{item.subtitle}</p>
                <button className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-colors text-xl font-semibold shadow-lg hover:scale-105 transform duration-200">
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-all shadow-lg"
        >
          <ChevronLeft className="w-8 h-8 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-all shadow-lg"
        >
          <ChevronRight className="w-8 h-8 text-gray-800" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all shadow-md ${
                currentSlide === index 
                  ? 'bg-white scale-110 ring-2 ring-offset-2 ring-white' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}