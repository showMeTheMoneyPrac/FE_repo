import React from 'react';

import Header from 'components/common/Header';
import ProductDetail from 'components/product/ProductDetail';
import styled from 'styled-components';

const ProductDetailPage = () => {
  return (
    <>
      <Header />
      <Spacer />
      <ProductDetail />
    </>
  );
};

const Spacer = styled.div`
  min-height: 150px;
`;
export default ProductDetailPage;
