import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const packages = [
  {
    name: 'Starting From',
    price: 'Rs. 3000/-',
    features: [
      'Weekly live meditation sessions',
      'Personal family yoga classes',
      'Access to online support community',
    ]
  },
  {
    name: 'Starting from',
    price: 'Rs. 3000/-',
    features: [
      'Weekly live meditation sessions',
      'Personal family yoga classes',
      'Access to online support community',
    ]
  },
  {
    name: 'Starting from',
    price: 'Rs. 3000/-',
    features: [
      'Weekly live meditation sessions',
      'Personal family yoga classes',
      'Access to online support community',
    ]
  }
];

const Packages = () => {
  return (
    <div className="bg-amber-50/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Packages</h2>
          <ArrowRight className="h-6 w-6 text-amber-500" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-gray-600 mb-2">{pkg.name}</h3>
                <p className="text-2xl font-bold text-gray-900">{pkg.price}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-amber-500 mr-2" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full border-2 border-amber-500 text-amber-500 px-6 py-2 rounded-full hover:bg-amber-500 hover:text-white transition-colors">
                Buy now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;