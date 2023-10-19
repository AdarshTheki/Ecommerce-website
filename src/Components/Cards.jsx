import React from 'react';
import { NavLink } from 'react-router-dom';
import Stars from './Stars';

export default function Cards({ id, image, rating, title, price, category }) {
  const style = {
    height: '60px',
  };
  return (
    <>
      <img src={image} className='card-img-top object-fit-contain' height={150} alt={title} />
      <div className='card-body pb-0'>
        <span className='text-uppercase fw-bolder text-black-50 text-center'>{category}</span>
        <Stars stars={rating?.rate} count={rating?.count} />
        <h6 className='overflow-hidden' style={style}>
          {title}
        </h6>
        <div className='d-flex align-items-baseline justify-content-between'>
          <p className='fw-bolder'>
            <span className='text-danger text-decoration-line-through'>
              ${Math.floor(price / 0.7)}
            </span>{' '}
            <span className='fs-5'>${price}</span>
          </p>
          <NavLink to={`/product/${id}`} className='btn btn-outline-dark text-uppercase'>
            Buy
          </NavLink>
        </div>
      </div>
    </>
  );
}
