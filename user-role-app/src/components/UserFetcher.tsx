import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserRole } from '../redux/userSlice';

const UserFetcher: React.FC = () => {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const response = await axios.get('https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/');
      const user = response.data;
      dispatch(setUserRole({ name: user.username, role: user.role })); 
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <button type="button" className="btn btn-outline-primary w-100"  onClick={fetchUser}>
      Login
    </button>
  );
};

export default UserFetcher;
