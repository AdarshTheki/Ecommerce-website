import React from 'react';
import { NavLink } from 'react-router-dom';
import dress from '../assets/dress.svg';

const Home = () => {

  return (
    <div className='container'>
      <div className='d-md-flex justify-content-evenly mx-auto py-5 mt-5'>
        <div style={{ width: '300px' }}>
          <h5 className='card-title fw-bolder mb-0'>NEW SECTION ARRIVALS</h5>
          <p className='card-text lead fs-2'>CHECK OUT ALL THE THREADS</p>
          <p className='card-text lead text-capitalize'>
            you can explore ans shop many differnt collection from various barands here.
          </p>
          <NavLink to='products' className='btn btn-dark text-uppercase'>
            shop now
          </NavLink>
        </div>
        <img src={dress} alt='' height={300} />
      </div>
    </div>
  );
};

export default Home;
