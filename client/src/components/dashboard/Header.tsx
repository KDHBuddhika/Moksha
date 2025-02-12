import React from 'react';
import { Search, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative">
          <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        <Link to="/admins/profile" className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">Dinesh</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;