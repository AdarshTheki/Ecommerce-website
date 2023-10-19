import React from 'react';
import { BsGrid } from 'react-icons/bs';
import { MdOutlineFormatListBulleted } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toggleList, sortingLists } from '../redux/filterSlice';

export default function ProductSort() {
  const dispatch = useDispatch();
  const { filter_products, grid_view } = useSelector((state) => state.filter);

  const gridHandler = () => {
    dispatch(toggleList());
  };

  const sortingHandler = (e) => {
    let value = e.target.value;
    dispatch(sortingLists({ value }));
  };

  // styles
  const List = !grid_view ? 'btn btn-dark' : 'btn btn-outline-dark';
  const Grid = grid_view ? 'btn btn-dark' : 'btn btn-outline-dark';

  return (
    <div className='d-flex justify-content-between align-items-center py-3'>
      <div className='d-flex gap-3'>
        <button onClick={gridHandler} className={List}>
          <MdOutlineFormatListBulleted />
        </button>
        <button onClick={gridHandler} className={Grid}>
          <BsGrid />
        </button>
      </div>
      <h5>{filter_products?.length} Products Available</h5>
      <select name='sort' id='sort' onChange={sortingHandler} className='p-1'>
        <option value='a-z'>Sort A-Z</option>
        <option value='z-a'>Sort Z-A</option>
        <option value='lowest'>Price (lowest)</option>
        <option value='highest'>Price (highest)</option>
        <option value='toprated'>Top Rated</option>
        <option value='cheapest'>Cheapest</option>
      </select>
    </div>
  );
}
