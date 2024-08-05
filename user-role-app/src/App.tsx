import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import AdminUI from './components/AdminDashboard';
import UserUI from './components/UserDashboard';
import LoginPage from './components/LoginPage';
import LogoutButton from './components/LogoutButton';

const App: React.FC = () => {
  const userRole = useSelector((state: RootState) => state.user.role);

  return (
    <div className="App">
      {userRole ? (
        <>
          {userRole === 'admin' && <AdminUI />}
          {userRole === 'user' && <UserUI />}
          <LogoutButton />
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default App;
