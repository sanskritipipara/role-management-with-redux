import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  const userRole = useSelector((state: RootState) => state.user.role);
  console.log(userRole)

  return (
    <div className="App">
      {userRole ? (
        <>
          {userRole === 'admin' && <AdminDashboard />}
          {userRole === 'user' && <UserDashboard />}
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default App;
