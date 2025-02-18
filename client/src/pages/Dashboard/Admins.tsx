import React, { useState } from 'react';
import { Search, Plus, Shield, Trash2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Admin {
  id: number;
  name: string;
  email: string;
  role: 'Super Admin' | 'Admin' | 'Moderator';
  status: 'Active' | 'Inactive';
  lastActive: string;
  avatar: string;
}

const mockAdmins: Admin[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: ['Sarah Wilson', 'John Doe', 'Emma Thompson', 'Michael Brown'][i % 4],
  email: ['sarah@example.com', 'john@example.com', 'emma@example.com', 'michael@example.com'][i % 4],
  role: i === 0 ? 'Super Admin' : i % 3 === 1 ? 'Admin' : 'Moderator',
  status: i % 4 === 0 ? 'Inactive' : 'Active',
  lastActive: '2 hours ago',
  avatar: `https://images.unsplash.com/photo-${['1494790108377-be9c29b29330', '1472099645785-5658abf4ff4e', '1534528741775-53994a69daeb', '1599566150163-29194dcaad36'][i % 4]}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`
}));

const Admins = () => {
  const [selectedAdmins, setSelectedAdmins] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedAdmins(mockAdmins.map(admin => admin.id));
    } else {
      setSelectedAdmins([]);
    }
  };

  const handleSelectAdmin = (adminId: number) => {
    setSelectedAdmins(prev => 
      prev.includes(adminId) 
        ? prev.filter(id => id !== adminId)
        : [...prev, adminId]
    );
  };

  const getRoleColor = (role: Admin['role']) => {
    switch (role) {
      case 'Super Admin':
        return 'bg-purple-100 text-purple-800';
      case 'Admin':
        return 'bg-blue-100 text-blue-800';
      case 'Moderator':
        return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Manage Admins</h1>
        <Link
          to="/dashboard/admins/add"
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add New Admin
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        {/* Table Header Actions */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
                selectedAdmins.length > 0 
                  ? 'bg-red-50 text-red-600 hover:bg-red-100'
                  : 'text-gray-400 bg-gray-50'
              }`}
              disabled={selectedAdmins.length === 0}
            >
              <Trash2 className="h-4 w-4" />
              Delete Selected
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search admins..."
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button className="px-4 py-2 border rounded-lg text-sm font-medium flex items-center gap-2">
              Filter by Role
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-12 px-4 py-3">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    checked={selectedAdmins.length === mockAdmins.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Admin</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Role</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Last Active</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockAdmins.map((admin) => (
                <tr key={admin.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedAdmins.includes(admin.id)}
                      onChange={() => handleSelectAdmin(admin.id)}
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={admin.avatar}
                        alt={admin.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{admin.name}</div>
                        <div className="text-sm text-gray-500">{admin.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(admin.role)}`}>
                      <Shield className="w-3 h-3 mr-1" />
                      {admin.role}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      admin.status === 'Active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {admin.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {admin.lastActive}
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-sm font-medium text-red-600 hover:text-red-700">
                      Remove Access
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Showing 8 of 8 admins</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded border" disabled>
              &lt;
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-yellow-500 text-white">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border" disabled>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admins;