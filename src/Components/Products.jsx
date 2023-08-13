import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

const Products = () => {
  const product = useSelector((state) => state.products);
  const [filter, setFilter] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setFilter(product);
    setTimeout(() => {
      setLoading(false);
    },1000)
  }, [product]);

  const Loading = () => {
    return (
      <>
        <div className='d-flex flex-wrap gap-2 justify-content-center my-5'>
          <Skeleton width={80} height={50} />
          <Skeleton width={120} height={50} />
          <Skeleton width={120} height={50} />
          <Skeleton width={120} height={50} />
          <Skeleton width={120} height={50} />
        </div>
        <div className='container d-flex mb-5 justify-content-center gap-4 flex-wrap'>
          <Skeleton height={300} width={280} />
          <Skeleton height={300} width={280} />
          <Skeleton height={300} width={280} />
          <Skeleton height={300} width={280} />
          <Skeleton height={300} width={280} />
          <Skeleton height={300} width={280} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const listProduct = product.filter((e) => e.category === cat);
    setFilter(listProduct);
  };

  const MenuButtons = () => {
    const productList = [
      "men's clothing",
      "women's clothing",
      "jewelery",
      "electronics",
    ];
    return (
      <div className='buttons mb-5 pt-4 flex-wrap gap-2 d-flex justify-content-center'>
        <button
          className='btn btn-outline-dark mb-2'
          onClick={() => setFilter(product)}>
          All
        </button>
        {productList.map((ele, item) => (
          <button
            key={item}
            className='btn btn-outline-dark mb-2 text-capitalize'
            onClick={() => filterProduct(ele)}>
            {ele}
          </button>
        ))}
      </div>
    );
  };

  const ShowProductMenu = ({ product }) => {
    const { id, image, title, price } = product;
    return (
      <>
        <div className='col-md-4 col-lg-3 col-sm-5 mb-4'>
          <div className='card h-100 text-center py-2 '>
            <img
              src={image}
              className='card-img-top object-fit-contain'
              height='200px'
              alt={title}
            />
            <div className='card-body'>
              <h5 className='card-title mb-0'>{title?.substring(0, 35)}...</h5>
              <p className='card-text lead fw-bolder'>Price: ${price}</p>
              <NavLink to={`/product/${id}`} className='btn btn-outline-dark'>
                Buy Now
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <div style={{ width: "100%", overflow: "hidden" }}>
        <div className='row'>
          <div className='col-12 border-dark'>
            <h1 className='display-6 pt-4 fw-bold text-center text-uppercase'>
              Latest Products
            </h1>
          </div>
        </div>
        <hr />
        <div className='container'>
          <div className='row justify-content-center '>
            <MenuButtons />
            {filter.map((product) => (
              <ShowProductMenu product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <>{isLoading ? <Loading /> : <ShowProduct />}</>;
};

export default Products;
