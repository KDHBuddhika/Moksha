import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-gray-600 mb-8">
              Mindful offers a serene space to craft deepening spiritual exploration. With a clear purpose, embrace growth, peaceful mindfulness, and connection while in companionship to it. 
              Join our community as we embark on a special journey to enlightenment.
            </p>
            <button className="bg-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition-colors">
              Learn More
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d"
              alt="Lotus flower in peaceful pond"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;