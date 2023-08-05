import bg from "../assets/bg.avif";
import Product from "./Products";

const Home = () => {
  return (
    <div className='hero'>
      <div className='card text-bg-dark text-dark border-0'>
        <img src={bg} className='card-img' alt='bg-logo' height='550px' />
        <div className='card-img-overlay d-flex flex-column justify-content-center '>
          <div className='container'>
            <h5 className='card-title display-3 fw-bolder mb-0'>
              NEW SECTION ARRIVALS
            </h5>
            <p className='card-text lead fs-2'>CHECK OUT ALL THE THREADS</p>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
