import { useState } from 'react'

const CheckoutForm = () => {
    const [value, setValue] = useState({
      firstName: "",
      lastName: "",
      email: "",
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

  return (
    <>
      <h4 className='mb-3'>Billing Address</h4>
      <form className='needs-validation' noValidate='' onSubmit={submitHandler}>
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
            <div className='invalid-feedback'>Valid first name is required</div>
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
            <div className='invalid-feedback'>Valid last name is required</div>
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
          <input type='checkbox' className='form-check-input' id='save-info' />
          <label className='form-check-label' htmlFor='save-info'>
            Save this information htmlFor next time
          </label>
        </div>

        <hr className='my-4' />

        <button className='w-100 btn btn-success btn-lg' type='submit'>
          Continue to checkout
        </button>
      </form>
    </>
  );
}

export default CheckoutForm
