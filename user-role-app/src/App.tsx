import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import UserDashboard from './components/UserDashboard';
import AdminDasboard from './components/AdminDashboard';

const App: React.FC = () => {
  const userRole = useSelector((state: RootState) => state.user.role);

  return (
    <div className="App">
      {userRole ? (
        <>
          <Navbar />
          <div className="container mt-4">
            {userRole === 'admin' && <AdminDasboard />}
            {userRole === 'user' && <UserDashboard />}
          </div>
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default App;
