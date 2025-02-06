import React from 'react';
import { Users, BookOpen, Heart, MapPin } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Members', value: '600+' },
  { icon: BookOpen, label: 'Programs', value: '20+' },
  { icon: Heart, label: 'Guiders', value: '10+' },
  { icon: MapPin, label: 'Destinations', value: '50+' }
];

const Stats = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-amber-500" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;