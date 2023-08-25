import { NavLink } from "react-router-dom";
import bg from "../assets/bg-home.svg";

const Home = () => {
  return (
    <div className='hero'>
      <div className='card text-dark border-0'>
        <img src={bg} className='card-img' alt='bg-logo' height='550px' />
        <div className='card-img-overlay d-flex flex-column justify-content-center '>
          <div className='container'>
            <h5 className='card-title display-3 fw-bolder mb-0'>
              NEW SECTION ARRIVALS
            </h5>
            <p className='card-text lead fs-2'>CHECK OUT ALL THE THREADS</p>
            <p className="w-50  text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, minima. Rerum quaerat, ex laudantium porro dolorem cum id laborum soluta distinctio ducimus. Necessitatibus dicta, ipsam eos voluptatum maxime accusantium excepturi?</p>
            <NavLink to="products" className="btn btn-outline-dark">Go to Product</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
