import React from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { mockAdminData, mockSalesData, mockRecentOrders } from '../data/mockAdminData';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const AdminDashboard: React.FC = () => {
  const salesChartData = {
    labels: mockSalesData.map(data => data.month),
    datasets: [
      {
        label: 'Sales',
        data: mockSalesData.map(data => data.sales),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text">{mockAdminData.totalUsers}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Active Users</h5>
              <p className="card-text">{mockAdminData.activeUsers}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card bg-warning text-dark">
            <div className="card-body">
              <h5 className="card-title">Total Sales</h5>
              <p className="card-text">${mockAdminData.totalSales}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <h5 className="card-title">Pending Orders</h5>
              <p className="card-text">{mockAdminData.pendingOrders}</p>
            </div>
          </div>
        </div>

        {/* Sales Chart */}
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sales Overview</h5>
              <Bar data={salesChartData} />
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recent Orders</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockRecentOrders.map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.product}</td>
                      <td>{order.quantity}</td>
                      <td>{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
