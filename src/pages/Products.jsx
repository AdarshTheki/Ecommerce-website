import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductLoading from '../Components/ProductLoading'

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
        <h2 className="text-center m-4 fs-2">Latest Products</h2>
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

  return <>{isLoading ? <ProductLoading /> : <ShowProduct />}</>;
};

export default Products;
