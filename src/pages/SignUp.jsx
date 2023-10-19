import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import Inputs from '../utils/Inputs';
import { logIn } from '../redux/userSlice';
import Buttons from '../utils/Buttons';
import Select from '../utils/Select';

const SignUp = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const cityOptions = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Jaipur',
    'Lucknow',
  ];
  const organizationOptions = [
    'Microsoft Corporation',
    'IBM',
    'Accenture',
    'Oracle',
    'SAP',
    'TCS',
    'DXC',
    'Delloite',
  ];

  const registerHandler = (e) => {
    console.log(e);
    // Construct the user object with entered data
    dispatch(logIn(e));
  };

  return (
    <div className='mx-auto my-5 col-md-5 rounded shadow-lg p-5'>
      <h2 className='text-capitalize mb-4'>login forms</h2>
      <form onSubmit={handleSubmit(registerHandler)} className='mx-auto'>
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

        <Select
          label='City: '
          options={cityOptions}
          {...register('city', {
            required: true,
          })}
        />

        <Select
          label='Organization: '
          options={organizationOptions}
          {...register('organization', {
            required: true,
          })}
        />
        <Buttons type='submit' className='my-4 btn-outline-dark'>
          LogIn
        </Buttons>
      </form>
    </div>
  );
};

export default SignUp;
