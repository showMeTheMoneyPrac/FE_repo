import React from 'react';
import styled from 'styled-components';

const PurchaseReview = ({ review, handleVisibleModal }) => {
  return (
    <PurchaseReviewWrapper>
      <ReviewWrapper>
        <h5 className="review-title">{review.title}</h5>
        <p className="review-content">{review.content}</p>
      </ReviewWrapper>
      <ReviewButtonWrapper>
        <button
          onClick={() => handleVisibleModal({ reviewId: review.id })}
          className="review-edit-btn"
        >
          리뷰 수정
        </button>
        <button className="review-delete-btn">리뷰 삭제</button>
      </ReviewButtonWrapper>
    </PurchaseReviewWrapper>
  );
};

const PurchaseReviewWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  .review-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  .review-content {
    font-size: 1.2rem;
  }
`;

const ReviewButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-self: flex-end;
  .review-edit-btn,
  .review-delete-btn {
    font-size: 1.4rem;
    background-color: #222;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 0.8rem;
  }
  .review-delete-btn {
    background-color: #cecece;
  }
`;

export default PurchaseReview;
