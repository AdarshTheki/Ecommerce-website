import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import Inputs from '../utils/Inputs';
import Buttons from '../utils/Buttons';
import { logIn } from '../redux/userSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthServices } from '../appwrite/AuthServices';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm();

  const SignInHandler = async (data) => {
    console.log(data);
    setError('');
    try {
      const session = await AuthServices.login(data);
      if (session) {
        const userData = await AuthServices.getCurrentUser();
        if (userData) {
          dispatch(logIn(userData));
        }
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='mx-auto my-5 col-md-5 rounded shadow-lg p-5'>
      <h2 className='text-capitalize mb-4'>login forms</h2>
      {error && <h6 className='text-danger text-center'>{error}</h6>}
      <form onSubmit={handleSubmit(SignInHandler)} className='mx-auto'>
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
          LogIn
        </Buttons>
        <h6>
          Don&apos;t have any account?&nbsp;
          <NavLink className='link link-info fw-bolder text-capitalize' to='/signup'>
            register account
          </NavLink>
        </h6>
      </form>
    </div>
  );
};

export default SignIn;
