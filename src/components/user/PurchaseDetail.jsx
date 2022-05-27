import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import StyledCheckbox from 'components/user/StyledCheckbox';
import useSelect from 'hooks/useSelect';
import { openReviewModal } from 'redux/modules/modal';
import PurchaseReview from './PurchaseReview';

const PurchaseDetail = ({ detail }) => {
  const dispatch = useDispatch();
  const { isSelected, handleSelector } = useSelect();

  const handleVisibleModal = useCallback(
    (reviewId) => {
      dispatch(openReviewModal(reviewId));
    },
    [dispatch],
  );

  return (
    <PurchaseDetailWrapper>
      <label htmlFor={detail.orderDetailId}>
        <input
          onChange={handleSelector}
          id={detail.orderDetailId}
          className="a11y-hidden"
          type="checkbox"
        />
        <StyledCheckbox isSelected={isSelected} />
      </label>
      <PurchaseInfo>
        <img className="product-image" src={detail.firstImg} alt="product" />
        <ProductInfo>
          <h4 className="product-title">{detail.title}</h4>
          <p className="product-option">{detail.ea}ea</p>
          <p className="product-price">{detail.price.toLocaleString()}원</p>
        </ProductInfo>
        {!detail.review && (
          <button
            onClick={() =>
              handleVisibleModal({ orderDetailId: detail.orderDetailId })
            }
            className="review-write-btn"
          >
            리뷰 작성
          </button>
        )}
      </PurchaseInfo>
      {detail.review && (
        <PurchaseReview
          review={detail.review}
          handleVisibleModal={handleVisibleModal}
        />
      )}
    </PurchaseDetailWrapper>
  );
};

const PurchaseDetailWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 6rem;
  padding: 0 0 1.5rem 3rem;
  border-bottom: 1px solid #cecece;
  > label {
    position: absolute;
    left: -0.5rem;
    top: 50%;
    transform: translate(0.5rem, -50%);
    width: 2rem;
    height: 2rem;
  }
`;

const PurchaseInfo = styled.div`
  flex: 1;
  display: flex;
  max-height: 6rem;
  .product-image {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
  }
  .review-write-btn {
    align-self: flex-end;
    font-size: 1.4rem;
    background-color: #222;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 0.8rem;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 2rem;
  .product-title {
    font-size: 1.6rem;
  }
  .product-option {
    font-size: 1.4rem;
    color: #8e8e8e;
  }
  .product-price {
    font-size: 1.4rem;
    flex: 1;
    display: flex;
    align-items: flex-end;
  }
`;

export default PurchaseDetail;
