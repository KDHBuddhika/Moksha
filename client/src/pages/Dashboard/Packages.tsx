import React, { useState } from 'react';
import { Search, Plus, Pencil, Trash2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Package {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  status: 'Active' | 'Inactive';
  image: string;
}

const mockPackages: Package[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: 'Adventure Package ' + (i + 1),
  description: 'Experience the thrill of mountain climbing and camping',
  price: 1200 + (i * 100),
  duration: '3 Days, 2 Nights',
  status: i % 3 === 0 ? 'Inactive' : 'Active',
  image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
}));

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Travel Packages</h1>
        <Link
          to="/packages/add"
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add New Package
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search packages..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border rounded-lg text-sm font-medium flex items-center gap-2">
              Sort by: Price
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="px-4 py-2 border rounded-lg text-sm font-medium flex items-center gap-2">
              Filter
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Package Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">{pkg.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    pkg.status === 'Active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {pkg.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{pkg.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-yellow-500">${pkg.price}</span>
                  <span className="text-sm text-gray-500">{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <button className="flex-1 px-3 py-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors text-sm font-medium">
                    <Pencil className="h-4 w-4 inline-block mr-1" />
                    Edit
                  </button>
                  <button className="flex-1 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium">
                    <Trash2 className="h-4 w-4 inline-block mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;