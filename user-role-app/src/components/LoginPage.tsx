import React from 'react';
import UserFetcher from './UserFetcher';

const LoginPage: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '800px' }}>
        <div className="row g-0">
          {/* Left side - Image */}
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/400x400.png?text=Organization+Logo"
              alt="Organization Logo"
              className="img-fluid h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Right side - Login form */}
          <div className="col-md-6 d-flex flex-column justify-content-center p-4">
            <h2 className="text-center mb-4">Welcome!</h2>
            <UserFetcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
