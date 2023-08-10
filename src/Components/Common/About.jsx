import { NavLink } from "react-router-dom"
import about from "../../assets/about.png"

const About = () => {
  return (
    <div>
      <div className='container py-5 my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='text-dark fw-bold mb-4'>About Us</h1>
            <p className='lead mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos
              enim quas, quae illum ratione commodi laudantium aut voluptatem
              incidunt distinctio ipsam vero dolores alias aliquam non ab quia
              at?
            </p>
            <NavLink to='/contact' className='btn-outline-dark btn'>
              Contact Us
            </NavLink>
          </div>
          <div className='col-md-6 justify-content-center d-flex'>
            <img src={about} alt='about' width="400px" height="400px"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
