import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  Video, 
  Calendar, 
  CreditCard, 
  UserCog, 
  LogOut 
} from 'lucide-react';

const menuItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/users', icon: Users, label: 'Users' },
  { path: '/packages', icon: Package, label: 'Packages' },
  { path: '/vlogs', icon: Video, label: 'Vlogs' },
  { path: '/reservation', icon: Calendar, label: 'Reservation' },
  { path: '/payment', icon: CreditCard, label: 'Payment' },
  { path: '/admins', icon: UserCog, label: 'Admins' },
];

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8">
        <Package className="h-8 w-8 text-yellow-500" />
        <span className="text-xl font-bold">Admin Panel</span>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-yellow-500 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
        
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 w-full mt-auto">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;