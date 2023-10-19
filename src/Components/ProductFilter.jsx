import React from 'react';
// import useFilterContext from '../context/useFilter';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterValue, clearAll } from '../redux/filterSlice';

export default function ProductFilter() {
  const {
    filters: { text, category, price },
    all_products,
  } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // get the unique categories
  const categories = all_products.map((product) => product.category);
  const uniqueCategories = ['all', ...new Set(categories)];

  const allPrice = all_products.map((product) => product.price);
  const maxPrice = Math.max(...allPrice);
  const minPrice = Math.min(...allPrice);

  const updateHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(updateFilterValue({ name, value }));
  };

  return (
    <>
      <div className='mb-3'>
        <h6>Search</h6>
        <form className='' onSubmit={(e) => e.preventDefault()}>
          <input type='text' name='text' id='text' value={text} onChange={updateHandler} />
        </form>
      </div>
      <div className='mb-3'>
        <h6>Categories</h6>
        <div className='d-flex flex-wrap gap-2'>
          {uniqueCategories?.map((item) => (
            <button
              key={item}
              name='category'
              value={item}
              onClick={updateHandler}
              className={`btn text-capitalize ${
                item === category ? 'btn-dark' : 'btn-outline-dark'
              }`}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className='mb-3'>
        <h6>Company</h6>
        <select
          name='category'
          className='text-capitalize'
          onChange={updateHandler}
          value={category}>
          {uniqueCategories.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className='mb-3'>
        <h6>Prices</h6>
        <input
          type='range'
          step={100}
          name='price'
          value={price}
          onChange={updateHandler}
          min={minPrice}
          max={maxPrice}
        />{' '}
        <span className='fw-bolder text-info'>${price}</span>
      </div>
      <div className='mb-3'>
        <button className='btn btn-danger fw-bolder' onClick={() => dispatch(clearAll())}>
          Clear All
        </button>
      </div>
    </>
  );
}
