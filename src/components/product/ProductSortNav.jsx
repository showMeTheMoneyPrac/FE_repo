import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ProductSortList from 'components/product/ProductSortList';
import useSearchQuery from 'hooks/useSearchQuery';

const ProductSortNav = () => {
  const [visible, setVisible] = useState(false);
  const sort = useSearchQuery('sort');
  const category = useSearchQuery('category');

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
        <CategoryValue>
          {!category && '전체'}
          {category && category}
        </CategoryValue>
        <SortBtn onClick={handleSortListVisible}>
          {!sort && '최신순'}
          {sort === 'recent' && '최신순'}
          {sort === 'cost' && '가격순'}
          {sort === 'review' && '리뷰순'}
        </SortBtn>
        <ProductSortList visible={visible} setVisible={setVisible} />
      </SortNavWrapper>
      <Outer onClick={handleSortListUnvisible} visible={visible} />
    </>
  );
};

const SortNavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 0 4rem 0;
  position: relative;
`;

const CategoryValue = styled.h3`
  font-size: 2rem;
  font-weight: 600;
`;

const SortBtn = styled.button`
  font-size: 1.4rem;
  font-weight: 600;
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
