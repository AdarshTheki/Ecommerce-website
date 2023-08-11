import { useDispatch } from "react-redux";
import { useState } from "react";
import { logIn } from "../../redux/userSlice";

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
      <form onSubmit={handleLogin} className='mx-auto'>
        <input
          className='mb-4 px-3 w-100'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='mb-4 px-3 w-100'
          type='text'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          value={city}
          className='mb-4 text-center w-100'
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
          className='mb-4 text-center w-100'
          onChange={(e) => setOrganization(e.target.value)}>
          <option value=''>Select Organization</option>
          {organizationOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <br />
        <button type='submit' className='btn btn-outline-dark'>
          LogIn
        </button>
      </form>
    </div>
  );
};

export default SignUp;
