import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Video, Package, DollarSign, Plus, Share2, TrendingUp, ArrowRight } from 'lucide-react';

const lineChartData = [
  { name: 'JUL', value: 20 },
  { name: 'AUG', value: 35 },
  { name: 'OCT', value: 45 },
  { name: 'NOV', value: 40 },
  { name: 'DEC', value: 60 },
];

const barChartData = [
  { name: 'JUL', value: 100 },
  { name: 'AUG', value: 110 },
  { name: 'OCT', value: 130 },
  { name: 'NOV', value: 150 },
  { name: 'DEC', value: 180 },
];

const pieChartData = [
  { name: 'Online', value: 1000, color: '#22C55E' },
  { name: 'Offline', value: 225, color: '#EF4444' },
];

const statsData = [
  { icon: Users, label: 'Total Users', value: '1225', subtext: 'Total users', trend: '+12.5%' },
  { icon: Video, label: 'Vlogs Published', value: '25', subtext: 'Vlogs Published', trend: '+5.0%' },
  { icon: Package, label: 'Packages Available', value: '6', subtext: 'Packages Available', trend: '+2.0%' },
  { icon: DollarSign, label: 'Monthly Income', value: '12000.00', subtext: 'Total Bookings', trend: '+8.2%' },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Last updated: Just now</span>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Generate Report
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-6">
        {/* Stats Section */}
        <div className="col-span-3 space-y-4">
          {statsData.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg text-white">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{stat.subtext}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-green-500">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">{stat.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="col-span-2 space-y-4">
          <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-all text-white group">
            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
              <Share2 className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <span className="font-medium block">Create Package</span>
              <span className="text-sm text-white/80">Add new travel package</span>
            </div>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full bg-white/80 backdrop-blur-lg rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-all border border-gray-100 group">
            <div className="p-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg text-white">
              <Plus className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <span className="font-medium block text-gray-800">Add Vlog</span>
              <span className="text-sm text-gray-500">Upload new content</span>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Latest Bookings Chart */}
        <div className="col-span-2 bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-800">Latest Bookings</h3>
            <a href="#" className="text-yellow-500 text-sm hover:underline flex items-center gap-1 group">
              Visit Reservation Page
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineChartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#F59E0B"
                  strokeWidth={2}
                  dot={false}
                  fill="url(#colorValue)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* User Signups Chart */}
        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-800">User Signups</h3>
            <a href="#" className="text-yellow-500 text-sm hover:underline flex items-center gap-1 group">
              Visit Users Page
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData}>
                <defs>
                  <linearGradient id="barColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ 
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="value" fill="url(#barColor)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Moksha Subscribers Chart */}
        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-800">Moksha Subscribers</h3>
          </div>
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-3xl font-bold text-gray-800">1225</div>
              <div className="text-sm text-gray-500">Total Users</div>
            </div>
            <div className="mt-8 flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
                <span className="text-sm font-medium text-gray-600">Online: 1000</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                <span className="text-sm font-medium text-gray-600">Offline: 225</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;