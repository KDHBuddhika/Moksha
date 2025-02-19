import React, { useState } from 'react';
import { Search, ChevronDown, CreditCard, Wallet, ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp } from 'lucide-react';

interface Payment {
  id: number;
  customerName: string;
  packageName: string;
  date: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  method: 'Credit Card' | 'PayPal' | 'Bank Transfer';
  transactionId: string;
}

const mockPayments: Payment[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  customerName: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson'][i % 4],
  packageName: ['Mountain Trek', 'Beach Paradise', 'Desert Safari', 'Forest Adventure'][i % 4],
  date: '2024-03-' + (15 + i),
  amount: 1200 + (i * 100),
  status: ['Completed', 'Pending', 'Failed'][i % 3] as Payment['status'],
  method: ['Credit Card', 'PayPal', 'Bank Transfer'][i % 3] as Payment['method'],
  transactionId: '#TXN' + (1000 + i)
}));

const Payment = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: Payment['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Payments</h1>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Revenue Card */}
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
              <Wallet className="h-6 w-6" />
            </div>
            <TrendingUp className="h-5 w-5" />
          </div>
          <p className="text-white/80">Total Revenue</p>
          <p className="text-3xl font-bold mt-1">$24,560.00</p>
          <div className="flex items-center gap-2 mt-4 text-sm">
            <ArrowUpRight className="h-4 w-4" />
            <span>12.5% increase from last month</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <ArrowUpRight className="h-6 w-6 text-green-600" />
            </div>
            <select className="text-sm border rounded-lg px-2 py-1">
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>
          <p className="text-gray-600">Successful Payments</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">452</p>
          <div className="flex items-center gap-2 mt-4 text-sm text-green-600">
            <ArrowUpRight className="h-4 w-4" />
            <span>8.2% increase</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-50 rounded-lg">
              <ArrowDownRight className="h-6 w-6 text-red-600" />
            </div>
            <select className="text-sm border rounded-lg px-2 py-1">
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>
          <p className="text-gray-600">Failed Payments</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">15</p>
          <div className="flex items-center gap-2 mt-4 text-sm text-red-600">
            <ArrowDownRight className="h-4 w-4" />
            <span>2.1% decrease</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search payments..."
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
              Payment Method
              <CreditCard className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Transaction ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Customer</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Package</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Method</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <span className="font-medium text-gray-900">{payment.transactionId}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-medium text-gray-900">{payment.customerName}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{payment.packageName}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {new Date(payment.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    ${payment.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{payment.method}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-sm font-medium text-yellow-600 hover:text-yellow-700">
                      View Receipt
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
            Showing 10 of 50 payments
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

export default Payment;