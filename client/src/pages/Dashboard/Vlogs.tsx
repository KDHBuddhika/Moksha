import React, { useState } from 'react';
import { Search, Plus, Play, Pencil, Trash2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Vlog {
  id: number;
  title: string;
  description: string;
  duration: string;
  views: number;
  thumbnail: string;
  publishDate: string;
  status: 'Published' | 'Draft';
}

const mockVlogs: Vlog[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: 'Adventure in the Mountains ' + (i + 1),
  description: 'Experience the breathtaking views and thrilling adventures in the Himalayas',
  duration: '12:30',
  views: 1200 + (i * 100),
  thumbnail: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  publishDate: '2024-03-15',
  status: i % 3 === 0 ? 'Draft' : 'Published'
}));

const Vlogs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Travel Vlogs</h1>
        <Link
          to="/vlogs/add"
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add New Vlog
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search vlogs..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border rounded-lg text-sm font-medium flex items-center gap-2">
              Sort by: Date
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="px-4 py-2 border rounded-lg text-sm font-medium flex items-center gap-2">
              Filter
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Vlogs Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockVlogs.map((vlog) => (
            <div key={vlog.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative group">
                <img src={vlog.thumbnail} alt={vlog.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="p-3 bg-white rounded-full text-yellow-500 transform hover:scale-110 transition-transform">
                    <Play className="h-6 w-6" />
                  </button>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-75 text-white text-xs rounded">
                  {vlog.duration}
                </span>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800 line-clamp-1">{vlog.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    vlog.status === 'Published' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {vlog.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{vlog.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(vlog.publishDate).toLocaleDateString()}</span>
                  <span>{vlog.views.toLocaleString()} views</span>
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

export default Vlogs;