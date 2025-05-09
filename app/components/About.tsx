'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Decorative header with gold accent - matching reservation page */}
      <div className="w-full">
        <div className="h-1 bg-yellow-300"></div>
        <div className="bg-gradient-to-b from-zinc-800 to-black h-20"></div>
      </div>
      
      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-4 pt-10 pb-20">
        {/* Page Title */}
        <motion.div 
          className="relative mb-16"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          variants={fadeIn}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-300"></div>
          <h1 className="text-4xl font-bold pt-6 text-center">About ELYSIAN</h1>
          <p className="text-yellow-300 text-center mt-3">Our story of culinary excellence</p>
        </motion.div>
        
        {/* Our Story Section - Simplified */}
        <motion.section 
          className="mb-16 bg-zinc-900 p-8 rounded-lg border border-zinc-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold mb-6 text-yellow-300">Our Story</h2>
          <p className="mb-4 text-gray-300">
            Founded in 2010 by acclaimed Chef Isabella Montague, ELYSIAN was born from a passion for transforming the finest ingredients into unforgettable dining experiences.
          </p>
          <p className="mb-4 text-gray-300">
            What began as an intimate 30-seat establishment has evolved into one of the city's most celebrated culinary destinations, all while maintaining our commitment to exceptional quality and genuine hospitality.
          </p>
          <p className="text-gray-300">
            Our name, ELYSIAN, reflects our philosophy: creating a paradise for the senses through thoughtfully crafted cuisine in an atmosphere of refined elegance.
          </p>
        </motion.section>
        
        {/* Philosophy Section */}
        <motion.section 
          className="mb-16 py-12 bg-zinc-900 rounded-lg px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold mb-8 text-yellow-300 text-center">Our Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4 mx-auto">
                <span className="text-yellow-300 text-2xl">✦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Exceptional Ingredients</h3>
              <p className="text-gray-300">
                We source the finest seasonal produce, sustainable seafood, and ethically raised meats from local farmers and trusted purveyors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4 mx-auto">
                <span className="text-yellow-300 text-2xl">✦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Culinary Artistry</h3>
              <p className="text-gray-300">
                Each dish is thoughtfully crafted, balancing tradition with innovation to create memorable dining experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4 mx-auto">
                <span className="text-yellow-300 text-2xl">✦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Gracious Hospitality</h3>
              <p className="text-gray-300">
                We believe exceptional service is as important as exceptional food, creating an atmosphere where every guest feels welcomed.
              </p>
            </div>
          </div>
        </motion.section>
        
        {/* Meet The Team Section - Simplified List */}
        <motion.section
          className="mb-16 bg-zinc-900 p-8 rounded-lg border border-zinc-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold mb-8 text-yellow-300 text-center">Our Team</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-yellow-300 pl-6 py-2">
              <h3 className="text-xl font-semibold">Isabella Montague</h3>
              <p className="text-yellow-300 mb-2">Executive Chef & Founder</p>
              <p className="text-gray-300">
                With 20 years of culinary experience and training at renowned restaurants across Europe, Chef Isabella brings her passion for innovative cuisine to every dish at ELYSIAN.
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-300 pl-6 py-2">
              <h3 className="text-xl font-semibold">Marcus Chen</h3>
              <p className="text-yellow-300 mb-2">Head Chef</p>
              <p className="text-gray-300">
                A culinary innovator with expertise in flavor composition, Chef Marcus leads our kitchen team with precision and creativity, constantly pushing culinary boundaries.
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-300 pl-6 py-2">
              <h3 className="text-xl font-semibold">Sophia Laurent</h3>
              <p className="text-yellow-300 mb-2">Pastry Chef</p>
              <p className="text-gray-300">
                Trained in Paris, Chef Sophia creates exquisite desserts that combine classic techniques with modern presentations, providing the perfect finale to your dining experience.
              </p>
            </div>
          </div>
        </motion.section>
        
        {/* Awards & Recognition - Simple Layout */}
        <motion.section 
          className="py-12 bg-zinc-900 rounded-lg px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold mb-8 text-yellow-300 text-center">Awards & Recognition</h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-yellow-500/20 flex items-center justify-center mr-4">
                <span className="text-yellow-300 text-xl">★</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Michelin Star</h3>
                <p className="text-gray-300">Recognized for culinary excellence, 2018-Present</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-yellow-500/20 flex items-center justify-center mr-4">
                <span className="text-yellow-300 text-xl">★</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">James Beard Award</h3>
                <p className="text-gray-300">Outstanding Restaurant, 2019</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-yellow-500/20 flex items-center justify-center mr-4">
                <span className="text-yellow-300 text-xl">★</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Food & Wine</h3>
                <p className="text-gray-300">Best New Restaurant, 2011</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-yellow-500/20 flex items-center justify-center mr-4">
                <span className="text-yellow-300 text-xl">★</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">City Culinary Excellence</h3>
                <p className="text-gray-300">Best Fine Dining Experience, 2015-2023</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
