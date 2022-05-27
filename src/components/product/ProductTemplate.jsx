import React from 'react';
import styled from 'styled-components';

import ProductList from 'components/product/ProductList';
import ProductNav from 'components/product/ProductNav';
import ProductSortNav from 'components/product/ProductSortNav';
import ScrollBtn from './ScrollBtn';

const ProductTemplate = () => {
  return (
    <>
      <Spacer />
      <ProductWrapper>
        <ProductNav />
        <LeftWrapper>
          <ProductSortNav />
          <ProductList />
        </LeftWrapper>
        <ScrollBtn />
      </ProductWrapper>
    </>
  );
};

const Spacer = styled.div`
  min-height: 150px;
`;

const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 3rem;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ProductTemplate;
