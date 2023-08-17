import { useSelector } from "react-redux";
import CheckoutForm from "../Components/CheckoutForm";

const Checkout = () => {
  const state = useSelector((state) => state.cart);

  var total = 0;
  const itemList = (item) => {
    total += item?.price * item?.qty;
    return (
      <li className='lis-group-item gap-2 d-flex justify-content-between border-bottom mb-2 pb-2'>
        <div>
          <h6 className='my-0'>{item.title}</h6>
          <span className='text-primary fw-medium'>
            Qty: {item?.qty}, Price: {item?.price}
          </span>
        </div>
        <span className='text-success fw-medium'>
          ${(item?.price * item?.qty).toFixed(2)}
        </span>
      </li>
    );
  };

  return (
    <>
      <div className='container my-5'>
        <div className='row g-5'>
          <div className='col-md-5 col-lg-4 order-md-last'>
            <h4 className='d-flex justify-content-between align-items-center mb-3'>
              <span className='text-dark'>Your Cart</span>
              <div>
                Total
                <span className='badge bg-warning rounded-pill'>
                  {state.length}
                </span>
              </div>
            </h4>
            <ul className='mb-3 list-group'>
              {state.map(itemList)}

              <li className='d-flex display-6 justify-content-between'>
                <span>Total (USD)</span>
                <strong className='text-danger'>${total.toFixed(2)}</strong>
              </li>
            </ul>

            <form className='card p-2'>
              <div className='input-group'>
                <input
                  type='text'
                  placeholder='Promo Code'
                  className='form-control'
                />
                <button title="soon...!" className='btn btn-dark' type='submit'>
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className='col-md-7 col-lg-8'>
            <CheckoutForm/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
