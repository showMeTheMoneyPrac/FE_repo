import React from 'react';
import styled from 'styled-components';
import ProductList from './ProductList';
import ProductNav from './ProductNav';

const ProductTemplate = () => {
  return (
    <>
      <Spacer />
      <ProductWrapper>
        <ProductNav />
        <ProductList />
      </ProductWrapper>
      ;
    </>
  );
};

const Spacer = styled.div`
  min-height: 150px;
`;

const ProductWrapper = styled.div`
  display: flex;
`;

export default ProductTemplate;
