import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import ReviewModal from 'components/modal/ReviewModal';
import PurchaseDetail from 'components/user/PurchaseDetail';
import {
  initPurchaseList,
  selectAllPurchaseItem,
} from 'redux/modules/purchase';
import StyledCheckbox from 'components/common/StyledCheckbox';
import { refundPurchaseAPI } from 'api/purchase';

const PurchaseList = () => {
  const dispatch = useDispatch();
  const purchaseList = useSelector(({ purchase }) => purchase.purchaseList);
  const selectedList = useSelector(({ purchase }) => purchase.selectedList);
  const { visible } = useSelector(({ modal }) => modal.reviewModal);

  const totalList = useMemo(
    () =>
      purchaseList?.reduce(
        (prev, purchaseItem) => prev + purchaseItem.ordersDetailList.length,
        0,
      ),
    [purchaseList],
  );

  useEffect(() => {
    dispatch(initPurchaseList());
  }, [dispatch]);

  const handleSelectAllPurchaseItem = (e) => {
    if (e.target.checked) {
      dispatch(selectAllPurchaseItem(true));
    } else {
      dispatch(selectAllPurchaseItem(false));
    }
  };

  const handleRefundPurchaseItem = async () => {
    if (!selectedList.length) return;

    const stringParam = selectedList.join();
    try {
      await refundPurchaseAPI(stringParam);
      dispatch(initPurchaseList());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PurchaseListWrapper>
      <h3 className="purchase-title">구매 목록</h3>
      <ul className="purchase-list">
        {purchaseList?.map((purchaseItem) => (
          <PurchaseItem key={purchaseItem.ordersId}>
            {purchaseItem.ordersDetailList.map((detail) => (
              <PurchaseDetail key={detail.orderDetailId} detail={detail} />
            ))}
          </PurchaseItem>
        ))}
      </ul>
      {purchaseList && (
        <RefundWrapper>
          <div className="all-selector">
            <label htmlFor="allSelector">
              <input
                onChange={handleSelectAllPurchaseItem}
                checked={totalList === selectedList.length}
                id="allSelector"
                className="a11y-hidden"
                type="checkbox"
              />
              <StyledCheckbox isSelected={totalList === selectedList.length} />
            </label>
            <span className="selector-text">전체 선택</span>
          </div>
          <button onClick={handleRefundPurchaseItem} className="refund-btn">
            선택 상품 환불
          </button>
        </RefundWrapper>
      )}
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
  gap: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
`;

const RefundWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  padding: 0 2rem;
  .all-selector {
    display: flex;
    align-items: center;
    &:after {
      display: block;
      content: '';
      width: 1px;
      height: 1.4rem;
      border-right: 1px solid #cecece;
    }
  }
  .selector-text {
    display: block;
    font-size: 1.4rem;
    font-weight: bold;
    padding: 0 2rem;
  }
  .refund-btn {
    all: unset;
    padding: 0 2rem;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default PurchaseList;
