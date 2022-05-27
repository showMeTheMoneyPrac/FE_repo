import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ReviewModal from 'components/modal/ReviewModal';
import PurchaseDetail from 'components/user/PurchaseDetail';
import { fetchPurchaseList } from 'api/purchse';

const PurchaseList = () => {
  const [purchaseList, setPurchaseList] = useState(null);
  const { visible } = useSelector(({ modal }) => modal.reviewModal);

  useEffect(() => {
    const handleFetchPurchaseList = async () => {
      const { data } = await fetchPurchaseList();
      setPurchaseList(data.ordersList);
    };

    handleFetchPurchaseList();
  }, []);

  return (
    <PurchaseListWrapper>
      <h3 className="purchase-title">구매 목록</h3>
      <ul className="purchase-list">
        {purchaseList?.map((purchaseItem) => (
          <PurchaseItem key={purchaseItem.ordersId}>
            {purchaseItem.ordersDetailList.map((detail) => (
              <PurchaseDetail key={detail.orderDetailId} detail={detail} />
            ))}
            <RefundButtonWrapper>
              <button className="refund-btn">선택 상품 환불</button>
            </RefundButtonWrapper>
          </PurchaseItem>
        ))}
      </ul>
      {visible && <ReviewModal />}
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
    gap: 3rem;
  }
`;

const PurchaseItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
`;

const RefundButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  .refund-btn {
    font-size: 1.4rem;
    background-color: #cecece;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 0.8rem;
  }
`;

export default PurchaseList;
