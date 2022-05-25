import React from 'react';
import styled from 'styled-components';

const PurchaseItem = () => {
  return (
    <>
      <PurchaseItemWrapper>
        <PurchaseInfo>
          <img
            className="product-image"
            src="https://kream-phinf.pstatic.net/MjAyMjA1MTZfMTUz/MDAxNjUyNjY4MzQ5NzQ0.KrS4BvMwL5A5VQWRpzwJQXS-6WbR7bDMHV5BcZFgkYAg.ttStdioabFKDADPv7UnFYSHKPfmC8GQkpgwQY2A0_7Ug.PNG/a_82c516ec1891448aae220b4f9eec71b1.png?type=m_webp"
            alt="product"
          />
          <ProductInfo>
            <h4 className="product-title">상품 이름</h4>
            <p className="product-option">상품 옵션</p>
            <p className="product-description">상품 설명</p>
            <p className="product-price">상품 가격</p>
            <ActionButtonWrapper>
              <button className="refund-btn">환불 하기</button>
              <button className="review-btn">리뷰 작성</button>
            </ActionButtonWrapper>
          </ProductInfo>
        </PurchaseInfo>
        <ReviewWrapper>리뷰 내용</ReviewWrapper>
      </PurchaseItemWrapper>
    </>
  );
};

const PurchaseItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 30rem;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
`;

const PurchaseInfo = styled.div`
  flex: 1;
  display: flex;
  max-height: 30rem;
  .product-image {
    background-color: pink;
    width: 30rem;
    height: 30rem;
  }
`;

const ProductInfo = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-left: 2rem;
  background-color: orange;
  .product-title {
    font-size: 1.8rem;
  }
  .product-option {
    font-size: 1.6rem;
    color: #8e8e8e;
  }
  .product-description {
    font-size: 1.4rem;
    flex: 1;
  }
  .product-price {
    font-size: 1.6rem;
  }
`;

const ActionButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 3rem;
  right: 0;
  bottom: 0;
  .refund-btn,
  .review-btn {
    font-size: 1.4rem;
    background-color: #222;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 0.8rem;
  }
`;

const ReviewWrapper = styled.div`
  background-color: #acefff;
  padding: 2rem 0;
  font-size: 1.6rem;
`;

export default PurchaseItem;
