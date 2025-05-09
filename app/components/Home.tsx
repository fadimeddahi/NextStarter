import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black text-white w-screen min-h-screen overflow-x-hidden border-t-4 border-yellow-300">
      {/* Hero Section */}
      <section className="relative h-screen w-screen">
        <div className="absolute inset-0">
          <Image
            src="/hero-restaurant.jpg"
            alt="Elegant dining experience"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        {/* Content remains the same */}
        <div className="w-screen px-4 h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">ELYSIAN</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">Experience fine dining at its most exquisite</p>
          <Link href="/reservation" className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black transition-colors duration-300 px-8 py-3 text-lg font-medium">
            Reserve a Table
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black w-screen">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-6 text-yellow-300">Our Story</h2>
              <p className="mb-4">
                Founded in 2010, Elysian has established itself as a beacon of culinary excellence. Our philosophy is simple: exceptional ingredients, impeccable preparation, and unforgettable experiences.
              </p>
              <p className="mb-4">
                Led by award-winning Chef Isabella Montague, our kitchen crafts contemporary dishes with classical techniques, celebrating local produce and global inspirations.
              </p>
              <Link href="/about" className="text-yellow-300 hover:underline">
                Learn more about us →
              </Link>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-96">
              <Image
                src="/restaurant-interior.jpg"
                alt="Elysian Restaurant Interior"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-20 bg-zinc-900 w-screen">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-yellow-300">Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First dish remains unchanged */}
            <div className="bg-black rounded-md overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/dish-1.jpg"
                  alt="Truffle Risotto"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Truffle Risotto</h3>
                <p className="text-gray-300 mb-4">Creamy arborio rice, wild mushrooms, truffle oil</p>
              </div>
            </div>

            {/* Sea Bass with improved fitting */}
            <div className="bg-black rounded-md overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/dish-2.jpg"
                  alt="Pan-seared Sea Bass"
                  fill
                  className="object-contain object-center p-2"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Pan-seared Sea Bass</h3>
                <p className="text-gray-300 mb-4">Wild-caught sea bass, saffron emulsion, seasonal vegetables</p>
              </div>
            </div>

            {/* Chocolate Soufflé with improved fitting */}
            <div className="bg-black rounded-md overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/dish-3.jpg"
                  alt="Chocolate Soufflé"
                  fill
                  className="object-contain object-center p-2"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Chocolate Soufflé</h3>
                <p className="text-gray-300 mb-4">Valrhona chocolate, gold leaf, vanilla bean ice cream</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/menu" className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black transition-colors duration-300 px-6 py-2 text-lg font-medium">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-black w-screen">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Hours</h3>
              <p className="mb-2">Monday - Thursday: 5:30 PM - 10:00 PM</p>
              <p className="mb-2">Friday - Saturday: 5:00 PM - 11:00 PM</p>
              <p>Sunday: 5:00 PM - 9:00 PM</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Location</h3>
              <p className="mb-2">123 Elegance Avenue</p>
              <p className="mb-2">Luxury District</p>
              <p>New York, NY 10001</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Contact</h3>
              <p className="mb-2">Reservations: (212) 555-1234</p>
              <p className="mb-2">info@elysianrestaurant.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
