import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.products);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(id);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setProduct(allProduct);
      setLoading(false);
    };
    getProducts();
  }, [allProduct]);

  const filterId = product.filter((e) => e.id.toString() === id.toString());
  console.log(filterId);

  const Loading = () => {
    return (
      <>
        <div className='col-md-6'>
          <Skeleton height={400} />
        </div>
        <div className='col-md-6' style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={40} width={100} />
        </div>
      </>
    );
  };

  const RelatedProducts = ({ category }) => {
    const productRelated = product.filter((e) => e.category === category);
    return (
      <div className='row justify-content-center'>
        {productRelated.map((e) => (
          <div key={e.id} className='col-md-4 col-lg-3 col-sm-5 mb-4'>
            <div className='card h-100 text-center py-2 '>
              <img
                src={e.image}
                className='card-img-top object-fit-contain'
                height='200px'
                alt={e.title}
              />
              <div className='card-body'>
                <h5 className='card-title mb-0'>
                  {e.title?.substring(0, 35)}...
                </h5>
                <p className='card-text lead fw-bolder'>Price: ${e.price}</p>
                <NavLink to={`/product/${e.id}`} className='btn btn-outline-dark'>
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        {filterId.map((item) => {
          const { id, image, category, title, rating, description, price } =
            item;
          return (
            <div key={id} className='row px-4 mb-5'>
              <div className='col-md-6'>
                <img
                  src={image}
                  alt='image'
                  width='100%'
                  height='400'
                  className='object-fit-contain'
                />
              </div>
              <div className='col-md-6 mb-5'>
                <h4 className='text-uppercase text-black-50 '>{category}</h4>
                <h1 className='display-6'>{title}</h1>
                <p className='lead fw-medium'>
                  Rating {rating && rating.rate} <i className='fa fa-star text-warning fw-bold'></i>
                </p>
                <h3 className='display-6 fw-bold my-6'>${price}</h3>
                <p className='text-black-50 fw-medium'>{description}</p>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className='btn btn-outline-dark px-4'>
                  Add to Cart
                </button>
                <NavLink to='/cart' className='btn btn-dark ms-2 px-3 '>
                  Go to Cart
                </NavLink>
              </div>
              <h2 className="display-6 text-capitalize text-black-50 fw-medium m-4">{category} Related Products</h2>
              <RelatedProducts category={category} />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className='container py-5'>
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </>
  );
};

export default ProductDetail;
