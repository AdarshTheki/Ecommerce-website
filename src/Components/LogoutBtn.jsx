import React from 'react';
import { AuthServices } from '../appwrite/AuthServices';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/userSlice';

export default function LogoutBtn({ children }) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    AuthServices.logout().then(() => dispatch(logOut()));
  };

  return (
    <button onClick={logoutHandler} className='btn btn-danger'>
      {children}
    </button>
  );
}
