import React, { useState } from 'react';
import ProductBuyInfo from './ProductBuyInfo/ProductBuyInfo';
import ProductImg from './ProductImg/ProductImg';
import ProductInfo from './ProductInfo/ProductInfo';

function ProductDetail() {
  const [getData, setGetData] = useState([]);

  return (
    <>
      <ProductImg />
      <ProductBuyInfo />
      <ProductInfo />
    </>
  );
}

export default ProductDetail;
