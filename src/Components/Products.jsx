import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => componentMounted(false);
    };
    getProducts();
  }, [componentMounted]);

  const Loading = () => {
    return (
      <div className='d-flex justify-content-center '>
        <div className='col-sm-3 mx-2'>
          <Skeleton height={350} />
        </div>
        <div className='col-sm-3 mx-2'>
          <Skeleton height={350} />
        </div>
        <div className='col-sm-3 mx-2'>
          <Skeleton height={350} />
        </div>
      </div>
    );
  };

  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  const ShowProduct = () => {
    return (
      <>
        <div className='buttons mb-5 pt-4  d-flex justify-content-center'>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => setFilter(data)}>
            All
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct("men's clothing")}>
            Mens Clothing
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct("women's clothing")}>
            Womans Clothing
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct("jewelery")}>
            Jewelry
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct("electronics")}>
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className='col-md-4 col-lg-3 col-sm-5 mb-4' key={product.id}>
              <div className='card h-100 text-center py-2 '>
                <img
                  src={product.image}
                  className='card-img-top object-fit-contain '
                  height='200px'
                  alt={product.title}
                />
                <div className='card-body'>
                  <h5 className='card-title mb-0'>
                    {product.title.substring(0, 35)}...
                  </h5>
                  <p className='card-text lead fw-bolder'>Price: ${product.price}</p>
                  <NavLink
                    to={`/product/${product.id}`}
                    className='btn btn-outline-dark'>
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div style={{width:"100%", overflow:"hidden"}}>
      <div className='row'>
        <div className='col-12 border-dark'>
          <h1 className='display-6 pt-4 fw-bold text-center text-uppercase'>Latest Products</h1>
        </div>
      </div>
      <hr />
      <div className='container'>
        <div className='row justify-content-center '>
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Products;
