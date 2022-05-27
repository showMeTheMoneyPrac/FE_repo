import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <ProductListWrapper>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </ProductListWrapper>
  );
};

const ProductListWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 3rem;
  flex-wrap: wrap;
  gap: 2rem;
`;

export default ProductList;
