import React from 'react';
import { mockUserData, mockActivityData } from '../data/mockData';

const UserDashboard: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* User Info Card */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Info</h5>
              <p className="card-text"><strong>Name:</strong> {mockUserData.name}</p>
              <p className="card-text"><strong>Email:</strong> {mockUserData.email}</p>
              <p className="card-text"><strong>Role:</strong> {mockUserData.role}</p>
              <p className="card-text"><strong>Last Login:</strong> {mockUserData.lastLogin}</p>
            </div>
          </div>
        </div>
        {/* Activity Log Table */}
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Activity Log</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Action</th>
                    <th>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {mockActivityData.map((activity) => (
                    <tr key={activity.id}>
                      <td>{activity.id}</td>
                      <td>{activity.action}</td>
                      <td>{activity.timestamp}</td>
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

export default UserDashboard;
