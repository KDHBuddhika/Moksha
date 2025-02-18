import React, { useState } from 'react';
import { ArrowLeft, Shield, Mail, Phone, MapPin, Calendar, Edit2, Lock, Bell, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ActivityLog {
  id: number;
  action: string;
  timestamp: string;
  details: string;
}

const mockActivityLogs: ActivityLog[] = [
  {
    id: 1,
    action: 'Updated Package',
    timestamp: '2 hours ago',
    details: 'Modified "Mountain Adventure Package" details'
  },
  {
    id: 2,
    action: 'Added New Vlog',
    timestamp: '5 hours ago',
    details: 'Published "Exploring Hidden Valleys" vlog'
  },
  {
    id: 3,
    action: 'User Management',
    timestamp: '1 day ago',
    details: 'Approved 5 new user registrations'
  },
  {
    id: 4,
    action: 'System Settings',
    timestamp: '2 days ago',
    details: 'Updated notification preferences'
  }
];

const AdminProfile = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'security' | 'notifications'>('overview');

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/admins" className="text-gray-600 hover:text-gray-800">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Admin Profile</h1>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Profile Info */}
        <div className="col-span-1 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-800">Sarah Wilson</h2>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mt-2">
                <Shield className="w-4 h-4 mr-1" />
                Super Admin
              </span>
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium w-full">
                Edit Profile
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="h-5 w-5" />
                <span className="text-sm">sarah.wilson@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="h-5 w-5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">Joined March 2024</span>
              </div>
            </div>
          </div>

          {/* Permissions Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Permissions</h3>
            <div className="space-y-3">
              {[
                'User Management',
                'Content Management',
                'System Settings',
                'Analytics Access',
                'Financial Operations',
                'Admin Management'
              ].map((permission) => (
                <div key={permission} className="flex items-center">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">{permission}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Tabs Content */}
        <div className="col-span-2 space-y-6">
          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="border-b border-gray-100">
              <nav className="flex">
                {[
                  { id: 'overview', label: 'Overview', icon: Edit2 },
                  { id: 'security', label: 'Security', icon: Lock },
                  { id: 'notifications', label: 'Notifications', icon: Bell }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 ${
                      activeTab === tab.id
                        ? 'border-yellow-500 text-yellow-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      {mockActivityLogs.map((log) => (
                        <div key={log.id} className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                          <div>
                            <div className="font-medium text-gray-900">{log.action}</div>
                            <div className="text-sm text-gray-500">{log.details}</div>
                            <div className="text-xs text-gray-400 mt-1">{log.timestamp}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Security Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">Two-Factor Authentication</div>
                          <div className="text-sm text-gray-500">Add an extra layer of security</div>
                        </div>
                        <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-sm font-medium">
                          Enable
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">Change Password</div>
                          <div className="text-sm text-gray-500">Update your password regularly</div>
                        </div>
                        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 text-sm font-medium">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Preferences</h3>
                    <div className="space-y-4">
                      {[
                        'Email notifications for new user registrations',
                        'System alerts and updates',
                        'Security alerts',
                        'Weekly activity summary',
                        'Package booking notifications'
                      ].map((pref) => (
                        <label key={pref} className="flex items-center justify-between p-4 border rounded-lg">
                          <span className="text-sm text-gray-600">{pref}</span>
                          <input
                            type="checkbox"
                            defaultChecked
                            className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;