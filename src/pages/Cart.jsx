import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { increaseQty, decreaseQty, removeFromCart, clearAllCart } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartItems = (cartItem) => {
    return (
      <div className='px-4 my-5' key={cartItem.id}>
        <div className='container rounded-3 border shadow-lg py-4'>
          <button
            className='btn-close float-end'
            aria-label='Close'
            onClick={() => dispatch(removeFromCart(cartItem.id))}></button>
          <div className='d-flex gap-5'>
            <div className=''>
              <img src={cartItem.image} alt={cartItem.title} height='100px' width='80px' />
            </div>
            <div className=''>
              <h6>{cartItem.title}</h6>
              <p className='fw-bold'>Price: ${cartItem.price}</p>
              <div className='fw-medium text-black-50'>
                Qty: {cartItem.qty} x ${cartItem.price} ={' '}
                <span className='text-danger'>${(cartItem.price * cartItem.qty).toFixed(2)}</span>
                <button
                  className='btn btn-outline-dark mx-2'
                  onClick={() => dispatch(increaseQty(cartItem))}>
                  +
                </button>
                <button
                  className='btn btn-outline-dark mx-2'
                  onClick={() => dispatch(decreaseQty(cartItem))}>
                  -
                </button>
                <button
                  className='btn btn-dark mx-2'
                  onClick={() => dispatch(removeFromCart(cartItem.id))}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className='px-4 my-5 bg-light rounded-3 py-5'>
        <div className='container py-4'>
          <div className='row'>
            <h3>Your Cart is Empty</h3>
            <h6 className='text-danger'>
              “Unfortunately, the following item(s) that you ordered are now out-of-stock. Although
              we try our best to maintain 100% accuracy with inventory, there are rare occasions
              where we experience an inventory error.”
            </h6>
          </div>
        </div>
      </div>
    );
  };

  const Button = () => {
    return (
      <div className='container'>
        <div className='row mb-5 mx-5'>
          <NavLink to='/checkout' className='btn btn-success col-md-4 col-5  mx-auto'>
            Proceed To Checkout
          </NavLink>
          <button
            onClick={() => dispatch(clearAllCart())}
            className='btn btn-danger col-md-4 col-5 mx-auto'>
            Clear all Products
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {cart.length === 0 && emptyCart()}
      {cart.length !== 0 && cart.map(cartItems)}
      {cart.length !== 0 && Button()}
    </>
  );
};

export default Cart;
