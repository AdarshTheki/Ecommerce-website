import { useDispatch, useSelector } from "react-redux";
import { delItem } from "../redux/action/index";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className='px-4 my-5 rounded-3' key={cartItem.id}>
        <div className='container bg-dark-subtle py-4'>
          <button
            onClick={() => handleClose(cartItem)}
            className='btn-close float-end'
            aria-label='Close'></button>
          <div className='row justify-content-center'>
            <div className='col-md-4'>
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height='200px'
                width='180px'
              />
            </div>
            <div className='col-md-4'>
              <h5>{cartItem.title}</h5>
              <p className='lead fw-bold'>Price: ${cartItem.price}</p>
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
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className='container'>
        <div className='row'>
          <NavLink
            to='/checkout'
            className='btn btn-outline-success mb-5 w-25 mx-auto'>
            Proceed To checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;

// const Cart = () => {
//   const state = useSelector((state) => state.handleCart);
//   console.log(state);
//   const handleButton = (product) => {
//     return product.qty + 1
//   }
//   return (
//     <div className='container my-4'>
//       {state.map((product) => (
//         <div
//           key={product.id}
//           className=' justify-content-center row mb-4 py-4 rounded-2 '
//           style={{ backgroundColor: "#e0e0e0" }}>
//           <div className='col-md-4'>
//             <img
//               src={product.image}
//               alt={product.title}
//               height='200px'
//               width='180px'
//             />
//           </div>
//           <div className='col-md-4'>
//             <h3>{product.title}</h3>
//             <p className='lead fw-bolder'>
//               {product.qty} X ${product.price} = ${product.qty * product.price}
//             </p>
//             <button
//               className='btn btn-outline-dark me-4'
//               onClick={() => handleButton(product)}>
//               <i className='fa fa-minus'></i>
//             </button>
//             <button
//               className='btn btn-outline-dark me-4'
//               onClick={() => handleButton(product)}>
//               <i className='fa fa-plus'></i>
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;
