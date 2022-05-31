import React from 'react';
import styled from 'styled-components';

import ProductList from 'components/product/ProductList';
import ProductNav from 'components/product/ProductNav';
import ProductSortNav from 'components/product/ProductSortNav';
import ScrollBtn from 'components/product/ScrollBtn';

const ProductTemplate = () => {
  return (
    <>
      <Spacer />
      <ProductWrapper>
        <ProductNav />
        <RightWrapper>
          <ProductSortNav />
          <ProductList />
        </RightWrapper>
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

const RightWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export default ProductTemplate;
