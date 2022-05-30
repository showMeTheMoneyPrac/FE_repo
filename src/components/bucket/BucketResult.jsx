import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { EnvironmentOutlined } from '@ant-design/icons';

const BucketResult = () => {
  const [error, setError] = useState();
  const userInfo = useSelector(({ user }) => user.userInfo);
  const bucketList = useSelector(({ bucket }) => bucket.bucketList);

  const totalPrice = useMemo(
    () => bucketList.reduce((prev, curr) => prev + curr.ea * curr.bill, 0),
    [bucketList],
  );

  const restPrice = useMemo(
    () => userInfo?.cash - totalPrice,
    [totalPrice, userInfo?.cash],
  );

  const handleBuyBucketList = () => {
    if (restPrice < 0) {
      setError('보유 포인트가 부족합니다.');
    }
  };

  return (
    <BucketResultOuter>
      <AddressSection>
        <div className="address-inner">
          <EnvironmentOutlined className="spot-icon" />
          <p>배송지</p>
        </div>
        <p className="address-content">{userInfo?.address}</p>
      </AddressSection>
      <PriceSection>
        <div className="user-cash">
          <p>보유 포인트</p>
          <p>{userInfo?.cash.toLocaleString()}원</p>
        </div>
        <div className="product-price">
          <p>상품 금액</p>
          <p>{totalPrice.toLocaleString()}원</p>
        </div>
        <div className="cash-result">
          <p>결제후 금액</p>
          <p>{restPrice.toLocaleString()}원</p>
        </div>
      </PriceSection>
      <button onClick={handleBuyBucketList} className="submit-btn">
        상품 구매
      </button>
      <div className="error-message">{error}</div>
    </BucketResultOuter>
  );
};

const BucketResultOuter = styled.aside`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  height: 35rem;
  margin-top: 4.2rem;
  padding: 3rem 2rem 1rem 2rem;
  border: 1px solid #cecece;
  border-radius: 0.5rem;
  .submit-btn {
    padding: 1.2rem;
    background-color: #000;
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
    border-radius: 0.5rem;
  }
  .error-message {
    height: 2rem;
    padding: 0.5rem 0;
    font-size: 1.2rem;
    color: red;
  }
`;

const AddressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  .address-inner {
    display: flex;
    gap: 0.5rem;
    font-size: 1.6rem;
    font-weight: bold;
  }
  .address-content {
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 2rem;
  }
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 3rem 0;
  border-top: 1px solid #cecece;
  .user-cash,
  .product-price,
  .cash-result {
    display: flex;
    justify-content: space-between;
  }
`;

export default BucketResult;
