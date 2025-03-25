import React from 'react';
import { CartItem } from '../types';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: number, change: number) => void;
  onRemoveItem: (productId: number) => void;
  onCheckout: () => void;
}

export default function Cart({ items, onClose, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Keranjang belanja Anda kosong!');
      return;
    }

    const whatsappNumber = "6281286383535";
    const message = `Halo TOKO RR, saya ingin membeli:\n\n${items.map(item => 
      `${item.product.name} - ${item.quantity} pcs`
    ).join('\n')}\n\nTotal: ${total.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR'
    })}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear cart after checkout
    onCheckout();
  };

  if (items.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Keranjang Belanja</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="text-center py-8">
            <img 
              src="/Gambar/logo_2.jpg"
              alt="TOKO RR Logo" 
              className="w-24 h-24 mx-auto mb-4"
            />
            <p className="text-gray-600">Keranjang belanja Anda kosong</p>
            <button
              onClick={onClose}
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Lanjutkan Belanja
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Keranjang Belanja</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center space-x-4">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.product.name}</h3>
                <p className="text-gray-600">
                  {item.product.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR'
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onUpdateQuantity(item.product.id, -1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.product.id, 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  className="p-1 text-red-500 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total:</span>
            <span className="text-xl font-bold">
              {total.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR'
              })}
            </span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-red-700 transition-colors font-medium"
          >
            Checkout via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}