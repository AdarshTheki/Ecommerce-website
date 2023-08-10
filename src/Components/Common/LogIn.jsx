const LogIn = () => {
  return (
    <div className='mx-auto my-5 py-5' style={{ maxWidth: 400}}>
      <div className='form-screen text-center'>

        <div className='card account-dialog'>
          <div className='lead fw-medium bg-success text-white py-2'>
            Please sign in
          </div>

          <div className='card-body'>
            <form action='#!'>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <br />
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>

              <div className='form-group'>
                <div className='custom-control custom-checkbox'>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='customCheck1'
                  />
                  <label
                    className='custom-control-label'
                    htmlFor='customCheck1'>
                    Remember me
                  </label>
                </div>
              </div>

              <div className='d-flex justify-content-between'>
                <button type='submit' className='btn btn-outline-dark'>
                  Sign in
                </button>
                <a className='text-dark fw-medium' href='/signup'>
                  Create a new account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
