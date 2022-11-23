import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ShoppingCart from '../UI/ShoppingCart';
import ProductItem from './ProductItem/ProductItem';

const UList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;

  width: 1260px;
  height: 960px;
`;

function ProductList() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get('http://35.76.53.28:8080/mall').then((res) => {
      setProductData(res.data);
    });
  }, []);

  return (
    <UList>
      {productData.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
      <ShoppingCart />
    </UList>
  );
}

export default ProductList;
