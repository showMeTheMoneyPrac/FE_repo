import React from 'react';
import styled from 'styled-components';

import BucketItem from 'components/bucket/BucketItem';
import StyledCheckbox from 'components/common/StyledCheckbox';

const BucketList = () => {
  return (
    <BucketInner>
      <h2 className="bucket-title">장바구니</h2>
      <ul className="bucket-list">
        <BucketItem />
        <BucketItem />
        <BucketItem />
      </ul>
      <ItemSelectorWrapper>
        <StyledCheckbox />
      </ItemSelectorWrapper>
    </BucketInner>
  );
};

const BucketInner = styled.section`
  flex: 1;
  margin-right: 2rem;
  .bucket-title {
    font-size: 2.2rem;
    font-weight: bold;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 3px solid #000;
  }
  .bucket-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const ItemSelectorWrapper = styled.div`
  padding: 2rem 0;
`;

export default BucketList;
