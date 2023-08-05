import { useState } from "react";

const SignUp = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    alert(
      `Email: ${value.email}\nPassword: ${value.password} \n Send to the firebase your Data successfull`
    );
  };
  return (
    <div className='mx-auto my-5 py-5' style={{ maxWidth: 400 }}>
      <div className='form-screen text-center'>
        <div className='card account-dialog'>
          <div className='lead fw-medium bg-success text-white py-2'>
            Create an account
          </div>

          <div className='card-body'>
            <form onSubmit={submitHandler}>
              <div className='form-group'>
                <input
                  type='email'
                  name='email'
                  value={value.email}
                  onChange={onChangeHandler}
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
                  name='password'
                  value={value.password}
                  onChange={onChangeHandler}
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <br />
              <div className='d-flex justify-content-between'>
                <button type='submit' className='btn btn-outline-dark '>
                  Sign up
                </button>
                <a className='text-dark fw-medium' href='/login'>
                  Already have an account?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
