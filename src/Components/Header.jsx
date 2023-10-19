import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOut } from '../redux/userSlice';
import Buttons from '../utils/Buttons';

const Header = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const users = useSelector((state) => state.user);
  const { user, isAuthentication } = users;

  const User = () => {
    return (
      <div className='user-dropdown bg-dark rounded'>
        <Buttons className='dropdown-btn text-white'>Hello, {user.email.slice(0, 10)}... ▼</Buttons>
        <div className='dropdown-content fw-bolder'>
          <p>
            Email: <span className='fw-medium'>{user?.email}</span>
          </p>
          <p>
            City: <span className='fw-medium'>{user?.city}</span>
          </p>
          <p>
            Organization: <span className='fw-medium'>{user?.organization}</span>
          </p>
          {/* <p>Age: {user.age}</p> */}
          {user.image && <img src={URL.createObjectURL(user.image)} alt='User' />}
          <Buttons className='btn-outline-danger' onClick={() => dispatch(logOut())}>
            Logout
          </Buttons>
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
            {isAuthentication ? (
              <User />
            ) : (
              <Buttons
                onClick={() => Navigate('/products')}
                className='fw-medium btn-outline-success'>
                Add User
              </Buttons>
            )}
            <NavLink to='cart' className='btn btn-outline-dark mx-2'>
              <i className='fa fa-shopping-cart me-1'></i>Cart ({cart.length})
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
