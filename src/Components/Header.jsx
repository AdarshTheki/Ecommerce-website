import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import Buttons from '../utils/Buttons';
import LogoutBtn from '../Components/LogoutBtn';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const Navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const users = useSelector((state) => state.user);
  const { status, userData } = users;

  const User = () => {
    return (
      <div className='user-dropdown bg-dark rounded'>
        <Buttons className='dropdown-btn text-white'>
          Hello, {userData?.name.slice(0, 10)}... ▼
        </Buttons>
        <div className='dropdown-content fw-bolder'>
          <p>
            Name: <span className='fw-medium'>{userData?.name}</span>
          </p>
          <p>
            Email: <span className='fw-medium'>{userData?.email}</span>
          </p>
          <Buttons className='btn btn-info mx-2' onClick={() => Navigate('/profile')}>
            Profile
          </Buttons>
          <LogoutBtn>Logout</LogoutBtn>
        </div>
      </div>
    );
  };

  return (
    <div className='NavBar position-sticky top-0 start-0 z-3'>
      <nav className='navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow'>
        <div className='container'>
          <NavLink className='navbar-brand mx-auto text-uppercase fw-bold fs-5' to='/products'>
            Gallery
          </NavLink>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <NavList />
          </div>
          <div className='buttons mx-auto'>
            {status ? (
              <User />
            ) : (
              <Buttons
                onClick={() => Navigate('/products')}
                className='fw-medium btn-outline-success'>
                Add User
              </Buttons>
            )}
            <NavLink to='cart' className='btn btn-outline-dark mx-2 position-relative'>
              <FaShoppingCart /> Cart{' '}
              <span className='position-absolute top-0 badge bg-dark'>{cart.length}</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

const NavList = () => {
  return (
    <ul className='navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold'>
      <li className='nav-item'>
        <NavLink className='nav-link' aria-current='page' to='/'>
          Home
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='products'>
          Products
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='about'>
          About
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='contact'>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};
