import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/userSlice';

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
