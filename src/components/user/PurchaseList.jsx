import React from 'react';
import styled from 'styled-components';
import PurchaseItem from 'components/user/PurchaseItem';

const PurchaseList = () => {
  return (
    <PurchaseListWrapper>
      <h3 className="purchase-title">구매 목록</h3>
      <ul className="purchase-list">
        <PurchaseItem />
        <PurchaseItem />
        <PurchaseItem />
      </ul>
    </PurchaseListWrapper>
  );
};

const PurchaseListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 6rem;
  .purchase-title {
    font-size: 2.2rem;
    font-weight: bold;
    padding-bottom: 2rem;
    margin-bottom: 4rem;
    border-bottom: 3px solid #000;
  }
  .purchase-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default PurchaseList;
