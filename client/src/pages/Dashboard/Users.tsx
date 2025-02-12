import React, { useState } from 'react';
import { Search, ChevronDown, Trash2 } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Inactive';
  joinedDate: string;
  avatar: string;
}

const mockUsers: User[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: 'Dinesh',
  email: 'dinesh@gmail.com',
  status: i % 3 === 2 ? 'Inactive' : 'Active',
  joinedDate: '24 july 2024, 5:45 pm',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}));

const Users = () => {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedUsers(mockUsers.map(user => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Manage Users</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Table Header Actions */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
                selectedUsers.length > 0 
                  ? 'bg-red-50 text-red-600 hover:bg-red-100'
                  : 'text-gray-400 bg-gray-50'
              }`}
              disabled={selectedUsers.length === 0}
            >
              <Trash2 className="h-4 w-4" />
              Delete All
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Name or Email"
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="relative">
              <button className="px-4 py-2 border rounded-lg text-sm font-medium flex items-center gap-2">
                Regular Users
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
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
                    checked={selectedUsers.length === mockUsers.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Full Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Joined Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span className="font-medium text-gray-900">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{user.email}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{user.joinedDate}</td>
                  <td className="px-4 py-3">
                    <button className="text-sm font-medium text-red-600 hover:text-red-700">
                      Delete
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
            <span>Rows Per Page:</span>
            <select className="border rounded px-2 py-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>All Rows: 50</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded border" disabled>
              &lt;
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  currentPage === page
                    ? 'bg-yellow-500 text-white'
                    : 'border hover:bg-gray-50'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button className="w-8 h-8 flex items-center justify-center rounded border">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;