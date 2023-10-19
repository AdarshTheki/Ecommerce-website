import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductLoading = () => {
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
export default ProductLoading;
