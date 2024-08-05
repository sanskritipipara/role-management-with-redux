import React from 'react';
import { mockActivityData } from '../data/mockData';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const UserDashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Info</h5>
              <p className="card-text"><strong>Name:</strong> {user.name}</p>
              <p className="card-text"><strong>Email:</strong>  {user.name}@gmail.com</p>
              <p className="card-text"><strong>Role:</strong> {user.role}</p>
              <p className="card-text"><strong>Last Login:</strong> '2024-08-01 10:00 AM'</p>
            </div>
          </div>
        </div>
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
