'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/ELYSIAN.png"
              alt="Elysian Restaurant Logo"
              width={180}
              height={60}
              className="h-16 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links - Desktop */}
        <div className={`md:flex items-center space-x-6 ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-black p-4 shadow-lg space-y-4' : 'hidden md:flex'}`}>
          <ul className={`flex ${isMenuOpen ? 'flex-col space-y-4' : 'space-x-6'}`}>
            <li>
              <Link 
                href="/" 
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/menu" 
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                href="/reservation" 
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservation
              </Link>
            </li>
            <li>
              <Link 
                href="/order" 
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Order
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
          </ul>
          
          {/* User Account Icon */}
          <div className="flex items-center">
            <Link href="/account" className="text-white hover:text-yellow-300 transition-colors">
              <FaUser size={20} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}