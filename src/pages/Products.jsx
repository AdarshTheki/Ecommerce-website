import ProductList from '../Components/ProductList';
import ProductSort from '../Components/ProductSort';
import ProductFilter from '../Components/ProductFilter';
import './Products.css';

const Products = () => {
  return (
    <div style={{ width: '100%', position:'relative' }}>
      <h2 className='text-center m-4 fs-2'>Latest Products</h2>
      <hr />
      <div className='flex'>
        <div className='flex-one'>
          <ProductFilter />
        </div>
        <div className='flex-two'>
          <ProductSort />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Products;
