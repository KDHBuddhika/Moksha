import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';

const packages = [
  {
    price: 'Rs. 3000/=',
    features: [
      'Weekly live meditation sessions',
      'Beginner-friendly yoga classes',
      'Access to online support community',
    ]
  },
  {
    price: 'Rs. 4000/=',
    features: [
      'Weekly live meditation sessions',
      'Beginner-friendly yoga classes',
      'Access to online support community',
      'Personal guidance sessions',
    ]
  },
  {
    price: 'Rs. 5000/=',
    features: [
      'Weekly live meditation sessions',
      'Advanced yoga classes',
      'Premium community access',
      'One-on-one mentoring',
    ]
  },
  {
    price: 'Rs. 6000/=',
    features: [
      'Daily live meditation sessions',
      'Advanced yoga classes',
      'Premium community access',
      'Two personal guidance sessions',
    ]
  },
  {
    price: 'Rs. 7000/=',
    features: [
      'Daily live meditation sessions',
      'Elite yoga classes',
      'VIP community access',
      'Weekly personal guidance',
    ]
  },
  {
    price: 'Rs. 8000/=',
    features: [
      'Unlimited meditation sessions',
      'Elite yoga classes',
      'VIP community access',
      'Unlimited personal guidance',
    ]
  }
];

const PackagesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5"
            alt="Meditation by the ocean"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Packages</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Choose from following packages offering value, flexibility, and exclusive
            perks for every need and budget.
          </p>
        </div>
      </div>

      {/* Packages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Discover the perfect package tailored to your needs!
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="text-center mb-8">
                  <p className="text-gray-600 mb-2">Starting From</p>
                  <p className="text-3xl font-bold text-gray-900">{pkg.price}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition-colors duration-300 transform hover:scale-105 active:scale-95">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offer Section */}
      <div className="bg-gray-900 py-16 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <div className="inline-block px-4 py-1 bg-amber-500 rounded-full text-sm font-medium mb-4">
                Prepare your Journey
              </div>
              <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
              <p className="text-gray-300 max-w-xl">
                Elevate Your Spiritual Presence. Launch your spiritual website with 15% off on all
                packages booked by December 31, 2024.
              </p>
              <button className="mt-6 bg-amber-500 text-white px-8 py-3 rounded-full hover:bg-amber-600 transition-colors duration-300">
                Buy Now
              </button>
            </div>
            <div className="w-64 h-64 relative">
              <div className="absolute inset-0 bg-amber-500/10 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
                alt="Meditation Silhouette"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PackagesPage;