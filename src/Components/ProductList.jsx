// import useFilter from '../context/useFilter';
import { useSelector } from 'react-redux';
import Cards from './Cards';

export default function ProductList() {
  const { filter_products, grid_view } = useSelector((state) => state.filter);
  return (
    <div className={grid_view ? 'list-row' : 'list-col'}>
      {filter_products?.map((item) => {
        return (
          <div key={item.id} className={grid_view ? 'mainContainerRow' : 'mainContainerCol'}>
            <Cards {...item} />
          </div>
        );
      })}
      {filter_products.length === 0 && (
        <div className='w-50 my-5'>
          <h6 className='text-danger'>
            “Unfortunately, the following item(s) that you ordered are now out-of-stock. Although we
            try our best to maintain 100% accuracy with inventory, there are rare occasions where we
            experience an inventory error.”
          </h6>
        </div>
      )}
    </div>
  );
}
