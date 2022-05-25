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
    </ProductListWrapper>
  );
};

const ProductListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default ProductList;
