'use client';

import React, { useState } from 'react';

export default function Order() {
  // Simple form with just address and basic contact info
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
  });
  
  // Static order total 
  const orderTotal = 124.95;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! Your order will be delivered to ${formData.address}.`);
    setFormData({
      address: '',
      phone: '',
    });
  };

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Order Delivery</h1>
        
        <div className="bg-zinc-900 p-6 rounded-lg">
          {/* Simple Order Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="address" className="block text-sm mb-1">Delivery Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="Your full address"
                className="w-full px-3 py-2 rounded bg-zinc-800 border border-zinc-700 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="For delivery contact"
                className="w-full px-3 py-2 rounded bg-zinc-800 border border-zinc-700 text-white"
              />
            </div>
            
            {/* Order Total */}
            <div className="mt-6 p-4 bg-zinc-800 rounded">
              <div className="flex justify-between items-center">
                <span>Order Total:</span>
                <span className="text-xl font-bold text-yellow-300">${orderTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded mt-4"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
