import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardDetails from '../Components/CardDetails';

const ProductDetail = () => {
  const allProduct = useSelector((state) => state.products);
  const { id } = useParams();

  const filterId = useMemo(
    () => allProduct.filter((e) => e.id.toString() === id.toString()),
    [allProduct, id]
  );

  return (
    <div className='container py-5'>
      {filterId.map((item) => {
        return <CardDetails items={item} key={item.id} />;
      })}
    </div>
  );
};

export default ProductDetail;
