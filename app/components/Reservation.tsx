'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '19:00', // Default to 7:00 PM
    guests: '2',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Static table status data - as requested
  const tableStatus = {
    available: 8,
    booked: 4,
    total: 12
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      alert(`Thank you, ${formData.name}! Your reservation for ${formData.guests} guests on ${formData.date} at ${formatTime(formData.time)} has been confirmed.`);
      setFormData({
        name: '',
        date: '',
        time: '19:00',
        guests: '2',
      });
      setIsSubmitted(false);
    }, 1500);
  };

  // Format time from 24h to 12h format
  const formatTime = (time: string) => {
    const [hour, minute] = time.split(':');
    const hourNum = parseInt(hour);
    return `${hourNum > 12 ? hourNum - 12 : hourNum}:${minute} ${hourNum >= 12 ? 'PM' : 'AM'}`;
  };

  // Dinner time slots
  const timeSlots = [
    { value: '17:30', label: '5:30 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '18:30', label: '6:30 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '19:30', label: '7:30 PM' },
    { value: '20:00', label: '8:00 PM' },
    { value: '20:30', label: '8:30 PM' },
    { value: '21:00', label: '9:00 PM' },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Decorative header with gold accent */}
      <div className="w-full">
        <div className="h-1 bg-yellow-300"></div>
        <div className="bg-gradient-to-b from-zinc-800 to-black h-20"></div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-20">
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-300"></div>
          <h1 className="text-4xl font-bold pt-6 text-center">Make a Reservation</h1>
          <p className="text-yellow-300 text-center mt-3">Experience the finest dining at ELYSIAN</p>
        </motion.div>
        
        <motion.div 
          className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-yellow-300">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 focus:border-yellow-300 focus:outline-none focus:ring-1 focus:ring-yellow-300 text-white transition-all duration-300"
              />
            </div>
            
            {/* Date and Time - 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2 text-yellow-300">Reservation Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 focus:border-yellow-300 focus:outline-none focus:ring-1 focus:ring-yellow-300 text-white transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2 text-yellow-300">Reservation Time</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 focus:border-yellow-300 focus:outline-none focus:ring-1 focus:ring-yellow-300 text-white transition-all duration-300"
                >
                  {timeSlots.map(slot => (
                    <option key={slot.value} value={slot.value}>{slot.label}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Number of Guests */}
            <div>
              <label htmlFor="guests" className="block text-sm font-medium mb-2 text-yellow-300">Number of Guests</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 focus:border-yellow-300 focus:outline-none focus:ring-1 focus:ring-yellow-300 text-white transition-all duration-300"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Person' : 'People'}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Table Status - Enhanced Visual */}
            <div className="mt-8 p-6 bg-zinc-800 rounded-md border border-zinc-700">
              <h3 className="text-yellow-300 font-medium mb-4 text-center">Current Table Availability</h3>
              <div className="flex justify-between items-center">
                <div className="text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center mb-2 mx-auto border border-green-500">
                    <span className="text-2xl font-bold text-white">{tableStatus.available}</span>
                  </div>
                  <span className="text-sm text-green-400">Available</span>
                </div>
                <div className="text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center mb-2 mx-auto border border-red-500">
                    <span className="text-2xl font-bold text-white">{tableStatus.booked}</span>
                  </div>
                  <span className="text-sm text-red-400">Reserved</span>
                </div>
                <div className="text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-zinc-700/50 flex items-center justify-center mb-2 mx-auto border border-zinc-600">
                    <span className="text-2xl font-bold text-white">{tableStatus.total}</span>
                  </div>
                  <span className="text-sm text-gray-400">Total</span>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full font-bold py-3 px-4 rounded-md transition-all duration-300 relative overflow-hidden 
                  ${isSubmitted ? 
                    'bg-green-600 text-white cursor-not-allowed' : 
                    'bg-yellow-500 hover:bg-yellow-600 text-black'}`
                }
              >
                {isSubmitted ? (
                  <>
                    <span className="inline-block mr-2">Reserving your table</span>
                    <span className="inline-block animate-pulse">...</span>
                  </>
                ) : (
                  'Reserve a Table'
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
