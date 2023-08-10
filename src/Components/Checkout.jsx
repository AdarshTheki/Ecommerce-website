import { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const state = useSelector((state) => state.cart);
  console.log(state);

  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "name@example.com",
    address: "",
    country: "",
    states: "",
    zip: "",
  });

  const onChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(value);
    alert("Please Check the Console");
    setValue({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      address: "",
      states: "",
      zip: "",
    });
  };

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
  console.log(total);

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
            <h4 className='mb-3'>Billing Address</h4>
            <form
              className='needs-validation'
              noValidate=''
              onSubmit={submitHandler}>
              <div className='row g-3'>
                <div className='col-sm-6'>
                  <label htmlFor='firstName' className='form-label'>
                    First Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='firstName'
                    name='firstName'
                    value={value.firstName}
                    onChange={onChangeHandler}
                    required
                  />
                  <div className='invalid-feedback'>
                    Valid first name is required
                  </div>
                </div>
                <div className='col-sm-6'>
                  <label htmlFor='lastName' className='form-label'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='lastName'
                    name='lastName'
                    value={value.lastName}
                    onChange={onChangeHandler}
                    required
                  />
                  <div className='invalid-feedback'>
                    Valid last name is required
                  </div>
                </div>
                <div className='col-12'>
                  <label htmlFor='email' className='form-label'>
                    Email <span className='text-muted'>(Optional)</span>
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={value.email}
                    onChange={onChangeHandler}
                    className='form-control'
                    id='email'
                    placeholder='you@example.com'
                  />
                  <div className='invalid-feedback'>
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div className='col-12'>
                  <label htmlFor='address' className='form-label'>
                    Address
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='address'
                    name='address'
                    value={value.address}
                    onChange={onChangeHandler}
                    placeholder='1234 Main St'
                    required=''
                  />
                  <div className='invalid-feedback'>
                    Please enter your shipping address.
                  </div>
                </div>

                <div className='col-md-5'>
                  <label htmlFor='country' className='form-label'>
                    Country
                  </label>
                  <select
                    onChange={onChangeHandler}
                    value={value.country}
                    name='country'
                    className='form-select'
                    id='country'
                    required=''>
                    <option value=''>Choose...</option>
                    <option value='INDIA'>India</option>
                    <option value='U.S.A'>United States</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please select a valid country.
                  </div>
                </div>

                <div className='col-md-4'>
                  <label htmlFor='state' className='form-label'>
                    State
                  </label>
                  <select
                    onChange={onChangeHandler}
                    value={value.states}
                    name='states'
                    className='form-select'
                    id='state'
                    required=''>
                    <option value=''>Choose...</option>
                    <option value='Maharashtra'>Maharashtra</option>
                    <option value='California'>California</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please provide a valid state.
                  </div>
                </div>

                <div className='col-md-3'>
                  <label htmlFor='zip' className='form-label'>
                    Zip
                  </label>
                  <input
                    onChange={onChangeHandler}
                    value={value.zip}
                    name='zip'
                    type='text'
                    className='form-control'
                    id='zip'
                    placeholder=''
                  />
                  <div className='invalid-feedback'>Zip code required.</div>
                </div>
              </div>

              {/*  hr */}
              <hr className='my-4' />

              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='same-address'
                />
                <label className='form-check-label' htmlFor='same-address'>
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='save-info'
                />
                <label className='form-check-label' htmlFor='save-info'>
                  Save this information htmlFor next time
                </label>
              </div>

              <hr className='my-4' />

              <button className='w-100 btn btn-success btn-lg' type='submit'>
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
