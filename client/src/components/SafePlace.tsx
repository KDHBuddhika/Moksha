import React from 'react';

const SafePlace = () => {
  return (
    <div className="bg-amber-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 relative">
              <div className="absolute inset-0 bg-amber-500/10 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
                alt="Meditation Silhouette"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              A Safe Place for Your Spiritual Path
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Mindful was created with the vision of providing a safe haven to explore and practice spirituality in a nurturing community. In a world often split by the divide, we wanted to craft a space where there is no right or wrong - there are only paths to enlightenment. Welcome to Mindful, your journey toward liberation and inner peace begins here. We're so grateful to have you with us.
            </p>
            <button className="bg-amber-500 text-white px-8 py-3 rounded-full hover:bg-amber-600 transition-colors font-medium">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafePlace;