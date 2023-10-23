import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { AuthServices } from '../appwrite/AuthServices';
import { logIn as authData } from '../redux/userSlice';
import Inputs from '../utils/Inputs';
import Buttons from '../utils/Buttons';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm();

  const registerHandler = async (data) => {
    setError('');
    console.log(data);
    const userData = await AuthServices.createAccount(data);
    if (userData?.email) {
      await AuthServices.getCurrentUser()
        .then((user) => dispatch(authData(user)))
        .catch((err) => setError(err.message));
    }
    navigate('/');
  };

  return (
    <div className='mx-auto my-5 col-md-5 rounded shadow-lg p-5'>
      <h2 className='text-capitalize mb-4'>register forms</h2>

      {error && <p className='text-danger text-center'>{error}</p>}

      <form onSubmit={handleSubmit(registerHandler)} className='mx-auto'>
        <Inputs
          label='Name: '
          placeholder='Enter your name'
          type='name'
          {...register('name', {
            required: true,
          })}
        />
        <Inputs
          label='Email: '
          placeholder='Enter your email'
          type='email'
          {...register('email', {
            required: true,
            validate: {
              matchPatern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                'Email address must be a valid address',
            },
          })}
        />
        <Inputs
          label='Password: '
          placeholder='Enter your password'
          type='text'
          {...register('password', {
            required: true,
          })}
        />
        <Buttons type='submit' className='my-4 btn-outline-dark'>
          Register
        </Buttons>

        <p>
          Already have an account?&nbsp;
          <NavLink className='link link-info fw-bolder text-capitalize' to='/login'>
            login account
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
