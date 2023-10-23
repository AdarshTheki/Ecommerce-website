import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const users = useSelector((state) => state?.user);
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-lg-12 col-sm-12 col-xs-12'>
            <div className='footer_menu'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/products'>Products</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
              <NavLink to='/cart'>Cart</NavLink>
              <NavLink to='/profile'>Profile</NavLink>
            </div>

            <div className='footer_profile mb-3'>
              <NavLink to='/'>
                <FaFacebook color='white' fontSize={30} />
              </NavLink>
              <NavLink to='/'>
                <FaTwitter color='white' fontSize={30} />
              </NavLink>
              <NavLink to='/'>
                <FaInstagram color='white' fontSize={30} />
              </NavLink>
              <NavLink to='/'>
                <FaPinterest color='white' fontSize={30} />
              </NavLink>
            </div>
            <div className='row w-50 padding-bottom-1x mx-auto'>
              {/* Subscription */}
              <form
                className='subscribe-form'
                action='#'
                method='post'
                target='_blank'
                noValidate=''>
                <div className='clearfix'>
                  <div className='input-group input-light'>
                    <input
                      className='form-control'
                      type='email'
                      name='EMAIL'
                      placeholder='Your e-mail'
                    />
                    <span className='input-group-addon'>
                      <i className='icon-mail'></i>
                    </span>
                  </div>
                  <button className='btn btn-primary mt-2' type='submit'>
                    Suscbribe
                  </button>
                </div>
                <span className='form-text text-sm text-white opacity-50'>
                  Subscribe to our Newsletter to receive early discount offers, latest news, sales
                  and promo information.
                </span>
              </form>
            </div>
            {/* Copyright */}
            <p className='footer-copyright'>
              <a>&copy; All rights reserved.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const Inputs = () => {
  return <></>;
};
