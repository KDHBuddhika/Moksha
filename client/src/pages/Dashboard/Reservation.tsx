import React, { useState } from 'react';
import { Search, ChevronDown, Calendar, Clock, Users, CreditCard } from 'lucide-react';

interface Reservation {
  id: number;
  customerName: string;
  packageName: string;
  date: string;
  time: string;
  guests: number;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  amount: number;
}

const mockReservations: Reservation[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  customerName: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson'][i % 4],
  packageName: ['Mountain Trek', 'Beach Paradise', 'Desert Safari', 'Forest Adventure'][i % 4],
  date: '2024-03-' + (15 + i),
  time: ['09:00 AM', '10:30 AM', '02:00 PM', '03:30 PM'][i % 4],
  guests: 2 + (i % 4),
  status: ['Confirmed', 'Pending', 'Cancelled'][i % 3] as Reservation['status'],
  amount: 1200 + (i * 100)
}));

const Reservation = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: Reservation['status']) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Reservations</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Confirmed (15)</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Pending (8)</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>Cancelled (3)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Quick Stats */}
        {[
          { icon: Calendar, label: "Today's Bookings", value: '12' },
          { icon: Clock, label: 'Pending Confirmation', value: '5' },
          { icon: Users, label: 'Total Guests Today', value: '45' },
          { icon: CreditCard, label: "Today's Revenue", value: '$5,240' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-50 rounded-lg">
                <stat.icon className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search reservations..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border rounded-lg text-sm font-medium flex items-center gap-2">
              Status: {selectedStatus}
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="px-4 py-2 border rounded-lg text-sm font-medium flex items-center gap-2">
              Date Range
              <Calendar className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Customer</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Package</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Date & Time</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Guests</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockReservations.map((reservation) => (
                <tr key={reservation.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <span className="font-medium text-gray-900">{reservation.customerName}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{reservation.packageName}</td>
                  <td className="px-4 py-3 text-gray-600">
                    <div>
                      <div>{new Date(reservation.date).toLocaleDateString()}</div>
                      <div className="text-sm text-gray-500">{reservation.time}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{reservation.guests} people</td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    ${reservation.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(reservation.status)}`}>
                      {reservation.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-sm font-medium text-yellow-600 hover:text-yellow-700">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing 10 of 26 reservations
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded border">
              &lt;
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-yellow-500 text-white">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;