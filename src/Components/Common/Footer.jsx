const Footer = () => {
  return (
    <div style={{ backgroundColor: "#313131", color: "#fff" }}>
      <div
        style={{ minHeight: 400 }}
        className='d-flex container justify-content-evenly gap-5 py-5'>
        <div className='col-md-2 d-flex flex-column align-items-center'>
          <h4 className='text-danger mb-4 my-5'>Layouts</h4>
          <a className='text-decoration-none' href='#'>
            Landing Page 1
          </a>
          <a className='text-decoration-none' href='#'>
            Landing Page 2
          </a>
          <a className='text-decoration-none' href='#'>
            Blog
          </a>
          <a className='text-decoration-none' href='#'>
            Blog Article
          </a>
          <a className='text-decoration-none' href='#'>
            Pricing
          </a>
          <a className='text-decoration-none' href='#'>
            About Us
          </a>
          <a className='text-decoration-none' href='#'>
            Contact
          </a>
        </div>
        <div className='col-md-2 d-flex flex-column align-items-center'>
          <h4 className='mb-4 my-5 text-danger'>Account Pages</h4>
          <a className='text-decoration-none' href='#'>
            Login
          </a>
          <a className='text-decoration-none' href='#'>
            LogIn
          </a>
          <a className='text-decoration-none' href='#'>
            Sign-up
          </a>
          <a className='text-decoration-none' href='#'>
            Sign-up validation
          </a>
          <a className='text-decoration-none' href='#'>
            Reset Password
          </a>
        </div>
        <div className='col-md-2 d-flex flex-column align-items-center'>
          <h4 className='mb-4 my-5 text-danger'>Mics</h4>
          <a className=' text-decoration-none' href='#'>
            Boxes
          </a>
          <a className=' text-decoration-none' href='#'>
            404 Error
          </a>
          <a className=' text-decoration-none' href='#'>
            403 Error
          </a>
          <a className=' text-decoration-none' href='#'>
            418 Error
          </a>
          <a className=' text-decoration-none' href='/'>
            Home
          </a>
        </div>
      </div>
        <p className="text-center m-0 pb-2">© Your Company • Terms • Privacy Policy</p>
    </div>
  );
};

export default Footer;
