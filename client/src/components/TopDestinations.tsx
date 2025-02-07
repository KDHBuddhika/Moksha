import React from 'react';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99",
    title: "Tiger's Nest Monastery",
    location: "Bhutan"
  },
  {
    image: "https://images.unsplash.com/photo-1604483165345-68e12d453c8a",
    title: "Sacred Waterfall",
    location: "Thailand"
  },
  {
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd",
    title: "Sacred Cave Temple",
    location: "India"
  },
  {
    image: "https://images.unsplash.com/photo-1627894006066-b45714699d64",
    title: "Temple Steps",
    location: "Cambodia"
  },
  {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    title: "Mountain Temple",
    location: "Nepal"
  },
  {
    image: "https://images.unsplash.com/photo-1588997123970-19bf79c9f748",
    title: "Cliff Temple",
    location: "Sri Lanka"
  }
];

const TopDestinations = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Top Destinations</h2>
          <ArrowRight className="h-6 w-6 text-amber-500" />
        </div>
        
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {destinations.map((destination, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg ${
                index === 0 ? 'col-span-1 row-span-1' : 
                index === 1 ? 'col-span-1 row-span-1' :
                index === 2 ? 'col-span-1 row-span-1' :
                'col-span-1 row-span-1'
              }`}
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{destination.title}</h3>
                  <p className="text-sm opacity-90">{destination.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;