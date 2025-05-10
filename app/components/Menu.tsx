'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Menu() {
  // Category selection state
  const [activeCategory, setActiveCategory] = useState('healthy');
  
  // State for tracking selected dish for modal
  const [selectedDish, setSelectedDish] = useState<number | null>(null);
  
  // Cart state to track ordered items
  const [cartItems, setCartItems] = useState<{id: number, name: string, price: number, quantity: number}[]>([]);
  
  // Add to order feedback
  const [showAddedToast, setShowAddedToast] = useState(false);
  
  
  // Menu data structure with your requested categories
  const menuData = {
    healthy: [
      { id: 1, name: 'Mediterranean Bowl', description: 'Quinoa, hummus, roasted vegetables, tahini dressing', price: 16, image: '/healthy-1.jpg' },
      { id: 2, name: 'Kale Power Salad', description: 'Avocado, pumpkin seeds, goji berries, lemon vinaigrette', price: 14, image: '/healthy-2.jpg' },
      { id: 3, name: 'Acai Super Bowl', description: 'Fresh berries, banana, house granola, coconut flakes', price: 12, image: '/healthy-3.jpg' }
    ],
    meats: [
      { id: 4, name: 'Filet Mignon', description: '8oz grass-fed beef, truffle butter, roasted vegetables', price: 42, image: '/meat-1.jpg' },
      { id: 5, name: 'Rack of Lamb', description: 'Herb-crusted, potato puree, mint reduction', price: 38, image: '/meat-2.jpg' },
      { id: 6, name: 'Duck Breast', description: 'Cherry glaze, wild rice, seasonal vegetables', price: 34, image: '/meat-3.jpg' }
    ],
    seafood: [
      { id: 7, name: 'Butter-Poached Lobster', description: 'Sweet corn risotto, asparagus, champagne sauce', price: 48, image: '/seafood-1.jpg' },
      { id: 8, name: 'Pan-Seared Sea Bass', description: 'Saffron risotto, confit fennel, citrus beurre blanc', price: 38, image: '/seafood-2.jpg' },
      { id: 9, name: 'Grilled Octopus', description: 'Romesco sauce, fingerling potatoes, crispy capers', price: 28, image: '/seafood-3.jpg' }
    ],
    sweets: [
      { id: 10, name: 'Chocolate Soufflé', description: 'Valrhona chocolate, vanilla bean ice cream', price: 14, image: '/sweet-1.jpg' },
      { id: 11, name: 'Crème Brûlée', description: 'Tahitian vanilla bean, caramelized sugar', price: 12, image: '/sweet-2.jpg' },
      { id: 12, name: 'Berry Pavlova', description: 'Seasonal berries, chantilly cream, mint', price: 13, image: '/sweet-3.jpg' }
    ]
  };
  
  // Category names for display
  const categories = [
    { id: 'healthy', name: 'Healthy Options' },
    { id: 'meats', name: 'Meats' },
    { id: 'seafood', name: 'Seafood' },
    { id: 'sweets', name: 'Sweets' }
  ];
  
  // Function to open dish details modal
  const openDishDetails = (id: number) => {
    setSelectedDish(id);
  };
  
  // Function to close dish details modal
  const closeDishDetails = () => {
    setSelectedDish(null);
  };
  
  // Find the currently selected dish
  const getSelectedDish = () => {
    if (selectedDish === null) return null;
    
    for (const category in menuData) {
      const dish = menuData[category as keyof typeof menuData].find(item => item.id === selectedDish);
      if (dish) return dish;
    }
    return null;
  };
  
  const dish = getSelectedDish();
  
  // Function to add dish to order
  const addToOrder = (dish: {id: number, name: string, price: number}) => {
    // Check if item is already in cart
    const existingItem = cartItems.find(item => item.id === dish.id);
    
    if (existingItem) {
      // Increase quantity if already in cart
      setCartItems(cartItems.map(item => 
        item.id === dish.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      // Add new item to cart
      setCartItems([...cartItems, {...dish, quantity: 1}]);
    }
    
    // Show feedback toast
    setShowAddedToast(true);
    setTimeout(() => setShowAddedToast(false), 2000);
    
    // Close the modal
    closeDishDetails();
  };
  
  // Calculate total items in cart
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate total price
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Decorative header with gold accent */}
      <div className="w-full">
        <div className="h-1 bg-yellow-300"></div>
        <div className="bg-gradient-to-b from-zinc-800 to-black h-20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-20">
        {/* Page Title */}
        <div className="relative mb-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-300"></div>
          <h1 className="text-4xl font-bold pt-6 text-center">Our Menu</h1>
          <p className="text-yellow-300 text-center mt-3">Fine dining excellence</p>
        </div>
        
        {/* Cart Summary - Add this new section */}
        {cartItemCount > 0 && (
          <div className="fixed bottom-4 right-4 bg-zinc-900 p-4 rounded-lg shadow-lg border border-yellow-300 z-40">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Items in cart:</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">{cartItemCount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Total:</span>
              <span className="text-yellow-300 font-bold">${cartTotal.toFixed(2)}</span>
            </div>
            <button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-bold py-2 px-4 rounded transition-colors">
              View Order
            </button>
          </div>
        )}
        
        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                ${activeCategory === category.id 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Items with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[activeCategory as keyof typeof menuData].map((item) => (
            <div 
              key={item.id} 
              className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 hover:-translate-y-1 cursor-pointer"
              onClick={() => openDishDetails(item.id)}
            >
              {/* Image placeholder */}
              <div className="relative h-60 bg-zinc-800 overflow-hidden group">
                {/* Replace with actual Image component when you have images */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600 group-hover:scale-110 transition-transform duration-500">
                  <span>Dish Image</span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white px-3 py-1 border border-yellow-300 rounded">View Details</span>
                </div>
                
                {/* Uncomment when you have actual images */}
                {/* 
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                */}
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <span className="text-yellow-300 font-bold">${item.price}</span>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dish Details Modal */}
      {selectedDish !== null && dish && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={closeDishDetails}>
          <div 
            className="bg-zinc-900 max-w-2xl w-full rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-80 bg-zinc-800">
              {/* Replace with actual Image component when you have images */}
              <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                <span className="text-2xl">Dish Image</span>
              </div>
              
              {/* Uncomment when you have actual images */}
              {/* 
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover"
              />
              */}
              
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 bg-black bg-opacity-60 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-all"
                onClick={closeDishDetails}
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-white">{dish.name}</h2>
                <span className="text-2xl font-bold text-yellow-300">${dish.price}</span>
              </div>
              
              <p className="text-gray-300 mb-6">{dish.description}</p>
              
              <div className="bg-zinc-800 p-4 rounded-md mb-6">
                <h3 className="text-yellow-300 text-sm font-medium mb-2">Chef's Notes</h3>
                <p className="text-gray-400 text-sm">
                  Our chef prepares this dish with locally sourced ingredients, carefully selected for their exceptional quality and flavor. Pair with our sommelier's wine recommendation for the perfect dining experience.
                </p>
              </div>
              
              <button 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded transition-colors w-full"
                onClick={() => dish && addToOrder({id: dish.id, name: dish.name, price: dish.price})}
              >
                Add to Order
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Added to cart toast notification */}
      {showAddedToast && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg animate-fade-in-out">
          Item added to your order!
        </div>
      )}
    </div>
  );
}
