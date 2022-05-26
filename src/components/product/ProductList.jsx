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
  flex-wrap: wrap;
  gap: 2rem;
`;

export default ProductList;
