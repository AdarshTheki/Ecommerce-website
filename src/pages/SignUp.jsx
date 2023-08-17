import { useDispatch } from "react-redux";
import { useState } from "react";
import { logIn } from "../redux/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();

  const cityOptions = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Jaipur",
    "Lucknow",
  ];
  const organizationOptions = [
    "Microsoft Corporation",
    "IBM",
    "Accenture",
    "Oracle",
    "SAP",
    "TCS",
    "DXC",
    "Delloite",
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [organization, setOrganization] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Construct the user object with entered data
    const user = {
      email,
      password,
      city,
      organization,
    };
    dispatch(logIn(user));
  };

  return (
    <div className='mx-auto my-5 col-md-5 rounded shadow-lg p-5'>
      <h2 className='text-capitalize mb-4'>login forms</h2>
      <form onSubmit={handleLogin} className='mx-auto'>
        <label htmlFor='email' className='fw-bold fs-5'>
          Email:
        </label>
        <input
          className='m-2 px-3 py-2'
          type='email'
          id='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor='password' className='fw-bold fs-5'>
          Password:
        </label>
        <input
          className='m-2 px-3 py-2'
          type='text'
          id='Password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <select
          value={city}
          className='m-2 text-center py-2'
          onChange={(e) => setCity(e.target.value)}>
          <option value=''>Select City</option>
          {cityOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <select
          value={organization}
          className='m-2 text-center py-2'
          onChange={(e) => setOrganization(e.target.value)}>
          <option value=''>Select Organization</option>
          {organizationOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <br />
        <button type='submit' className='btn my-4 btn-outline-dark'>
          LogIn
        </button>
      </form>
    </div>
  );
};

export default SignUp;
