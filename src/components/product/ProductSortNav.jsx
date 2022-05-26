import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ProductSortList from 'components/product/ProductSortList';

const ProductSortNav = () => {
  const [visible, setVisible] = useState(false);

  const handleSortListVisible = () => {
    setVisible(!visible);
  };

  const handleSortListUnvisible = () => {
    setVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleSortListUnvisible);

    return () => {
      window.removeEventListener('scroll', handleSortListUnvisible);
    };
  }, []);

  return (
    <>
      <SortNavWrapper>
        <SortBtn onClick={handleSortListVisible}>최신순</SortBtn>
        <ProductSortList visible={visible} setVisible={setVisible} />
      </SortNavWrapper>
      <Outer onClick={handleSortListUnvisible} visible={visible} />
    </>
  );
};

const SortNavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 3rem;
  position: relative;
`;

const SortBtn = styled.button`
  display: flex;
  justify-content: flex-end;
`;

const Outer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 300;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;
export default ProductSortNav;
