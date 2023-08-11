import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const users = useSelector((state) => state.user);
  const { user, isAuthentication } = users;

  const User = () => {
    return (
      <div className='user-dropdown bg-dark px-4 py-2 rounded'>
        <button className='dropdown-btn'>
          Hello, {user.email.slice(0, 10)}... ▼
        </button>
        <div className='dropdown-content fw-bolder'>
          <p>
            Email: <span className='fw-medium'>{user?.email}</span>
          </p>
          <p>
            City: <span className='fw-medium'>{user?.city}</span>
          </p>
          <p>
            Organization:{" "}
            <span className='fw-medium'>{user?.organization}</span>
          </p>
          {/* <p>Age: {user.age}</p> */}
          {user.image && (
            <img src={URL.createObjectURL(user.image)} alt='User' />
          )}
          <button
            className='btn-outline-dark btn'
            onClick={() => dispatch(logOut())}>
            Logout
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className='NavBar'>
      <nav className='navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm '>
        <div className='container'>
          <NavLink className='navbar-brand mx-auto fw-bold fs-5' to='/products'>
            Collections
          </NavLink>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <NavList/>
          </div>
          <div className='buttons mx-auto'>
            {isAuthentication ? (
              <User />
            ) : (
              <NavLink to='/products' className='fw-medium text-danger btn'>
                <i className='fa fa-user-plus me-1'></i>User
              </NavLink>
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
}