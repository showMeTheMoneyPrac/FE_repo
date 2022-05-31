import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import StyledCheckbox from 'components/common/StyledCheckbox';
import { openReviewModal } from 'redux/modules/modal';
import PurchaseReview from 'components/user/PurchaseReview';
import { selectPurchaseItem } from 'redux/modules/purchase';

const PurchaseDetail = ({ detail }) => {
  const dispatch = useDispatch();
  const selectedList = useSelector(({ purchase }) => purchase.selectedList);

  const handleVisibleModal = useCallback(
    (reviewId) => {
      dispatch(openReviewModal(reviewId));
    },
    [dispatch],
  );

  const handleSelectPurchaseItem = (e) => {
    if (e.target.checked) {
      dispatch(selectPurchaseItem({ type: false, id: +e.target.id }));
    } else {
      dispatch(selectPurchaseItem({ type: true, id: +e.target.id }));
    }
  };

  return (
    <PurchaseDetailWrapper>
      <label htmlFor={detail.orderDetailId}>
        <input
          onChange={handleSelectPurchaseItem}
          checked={selectedList?.includes(detail.orderDetailId)}
          id={detail.orderDetailId}
          className="a11y-hidden"
          type="checkbox"
        />
        <StyledCheckbox
          isSelected={selectedList?.includes(detail.orderDetailId)}
        />
      </label>
      <PurchaseInfo>
        <Link to={`/product/${detail.productId}`} className="product-img-link">
          <img className="product-image" src={detail.firstImg} alt="product" />
        </Link>
        <Link
          to={`/product/${detail.productId}`}
          className="product-detail-link"
        >
          <ProductInfo>
            <h4 className="product-title">{detail.title}</h4>
            <div className="product-option">
              <p>{detail.optionContent}</p>
              <p>({detail.ea}ea)</p>
            </div>
            <p className="product-price">{detail.price.toLocaleString()}원</p>
          </ProductInfo>
        </Link>
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
  gap: 2rem;
  padding: 0 0 2rem 3rem;
  border-bottom: 1px solid #cecece;
  &:last-child {
    border-bottom: none;
    padding: 0 0 0 3rem;
  }
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
  display: flex;
  .product-img-link {
    width: 6rem;
  }
  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .product-detail-link {
    display: flex;
    flex: 1;
    margin: 0 2rem;
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .product-title {
    font-size: 1.6rem;
  }
  .product-option {
    display: flex;
    gap: 0.5rem;
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
