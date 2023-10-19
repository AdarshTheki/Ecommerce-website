import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FcApproval } from 'react-icons/fc';

import { addToCart } from '../redux/cartSlice';
import Carts from './Cards';
import Stars from './Stars';

export default function CardDetails({ items }) {
  const { id, image, category, title, rating, description, price } = items;

  const allProduct = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const RelatedProduct = useMemo(
    () => allProduct.filter((product) => product.category === category),
    [allProduct, category]
  );

  return (
    <div key={id} className='row px-4 mb-5'>
      <div className='col-md-6'>
        <img src={image} alt='image' width='100%' height='400' className='object-fit-contain' />
      </div>
      <div className='col-md-6 mb-5'>
        <h4 className='text-uppercase text-black-50 '>{category}</h4>
        <h1 className='display-6'>{title}</h1>
        <div className='d-flex gap-2 my-3 flex-wrap'>
          {/* Stars Ratings */}
          <Stars stars={rating?.rate} />
          <span>
            <CiDeliveryTruck color='#5272F2' fontSize={30} /> Free Delivery
          </span>
          <span>
            <FcApproval fontSize={30} /> Guaranteed
          </span>
        </div>
        <h4 className='fw-bolder my-6'>
          <span className='text-danger card-text text-decoration-line-through '>
            ${Math.floor(price / 0.7)}.00
          </span>{' '}
          <span className='display-6 fw-bold'>${price}</span>
        </h4>
        <p className='text-black-50 fw-medium'>
          <span className='fw-bold'>Product Detail:</span> {description}
        </p>
        <button onClick={() => dispatch(addToCart(items))} className='btn btn-outline-dark px-4'>
          <AiOutlineShoppingCart fontSize={20} /> Add to Cart
        </button>
        <button onClick={() => Navigate('/cart')} className='btn btn-dark ms-2 px-3'>
          Checkout Cart
        </button>
      </div>
      <h2 className='display-6 text-capitalize text-black-50 fw-medium m-4'>
        <span className='text-uppercase'>{category}</span> Related Products
      </h2>
      {/* Related Products */}
      <div className='d-flex flex-wrap'>
        {RelatedProduct?.map((product) => (
          <div key={product.id} className='col-lg-3 col-md-4 col-sm-5 border px-3'>
            <Carts {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
