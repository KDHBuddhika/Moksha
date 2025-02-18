import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const AddAdmin = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/admins" className="text-gray-600 hover:text-gray-800">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Add New Admin</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <form className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Personal Information</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter email address"
              />
            </div>
          </div>

          {/* Role and Permissions */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Role and Permissions</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Role
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['Admin', 'Moderator', 'Super Admin'].map((role) => (
                  <label key={role} className="relative flex cursor-pointer rounded-lg border bg-white p-4 focus:outline-none">
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      className="sr-only"
                      aria-labelledby={`role-${role}-label`}
                    />
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span id={`role-${role}-label`} className="flex items-center gap-2 font-medium text-gray-900">
                          <Shield className="h-4 w-4 text-yellow-500" />
                          {role}
                        </span>
                        <span className="mt-1 flex items-center text-sm text-gray-500">
                          {role === 'Super Admin' 
                            ? 'Full system access'
                            : role === 'Admin'
                              ? 'Manage content and users'
                              : 'Basic management tasks'}
                        </span>
                      </span>
                    </span>
                    <span 
                      className="pointer-events-none absolute -inset-px rounded-lg border-2" 
                      aria-hidden="true"
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Permissions
              </label>
              <div className="space-y-2">
                {[
                  'Manage Users',
                  'Manage Packages',
                  'Manage Vlogs',
                  'View Analytics',
                  'Manage Payments',
                  'Manage Other Admins'
                ].map((permission) => (
                  <label key={permission} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{permission}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Password Setup */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Password Setup</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Confirm password"
                />
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <Link
              to="/admins"
              className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-sm font-medium"
            >
              Create Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;