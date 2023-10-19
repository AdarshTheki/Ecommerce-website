import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#313131', color: '#fff' }}>
      <div
        style={{ minHeight: 400 }}
        className='d-flex flex-wrap container justify-content-evenly align-items-start gap-5 py-5'>
        <div className='col-md-2 d-flex flex-column align-items-start lead fw-bolder'>
          <h4 className='text-danger mb-4 my-5'>Layouts</h4>
          <a className='text-decoration-none' href='/'>
            Home
          </a>
          <a className='text-decoration-none' href='/products'>
            Products
          </a>
          <a className='text-decoration-none' href='/about'>
            About
          </a>
          <a className='text-decoration-none' href='/contact'>
            Contact
          </a>
          <a className='text-decoration-none' href='/cart'>
            Cart
          </a>
        </div>
        <div className='col-md-2 d-flex flex-column align-items-start lead fw-bolder'>
          <h4 className='mb-4 my-5 text-danger'>Account Pages</h4>
          <a className='text-decoration-none' href='/login'>
            Login
          </a>
          <a className='text-decoration-none' href='/signup'>
            SignUp
          </a>
        </div>
        <div className='col-md-2 d-flex flex-column align-items-start lead fw-bolder'>
          <h4 className='mb-4 my-5 text-danger'>Mics</h4>
          <a className=' text-decoration-none' href='blog'>
            Blogs
          </a>
          <a className=' text-decoration-none' href='#'>
            404 Error
          </a>
          <a className=' text-decoration-none' href='#'>
            403 Error
          </a>
          <a className=' text-decoration-none' href='#'>
            418 Error
          </a>
          <a className=' text-decoration-none' href='/'>
            Home
          </a>
        </div>
      </div>
      <p className='text-center m-0 pb-2'>© Your Company • Terms • Privacy Policy</p>
    </div>
  );
};

export default Footer;
