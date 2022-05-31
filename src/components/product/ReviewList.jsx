import React from 'react';
import styled from 'styled-components';

const ReviewList = ({ reviews }) => {
  return (
    <ReivewListWrapper>
      <h4 className="review-info">리뷰 ({reviews && reviews.length})</h4>
      <ul className="review-list">
        {reviews &&
          reviews.map((review, i) => (
            <ReviewItem key={i}>
              <TopWrapper>
                <p className="title">{review.title}</p>
                <p>{review.nickname}</p>
              </TopWrapper>
              <p>{review.content}</p>
            </ReviewItem>
          ))}
      </ul>
    </ReivewListWrapper>
  );
};

const ReivewListWrapper = styled.div`
  padding: 8rem 3rem;
  .review-info {
    padding: 2rem 0;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 3px solid #cecece;
  }
  .review-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const ReviewItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0;
  font-size: 1.6rem;
  border-bottom: 1px solid #cecece;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  .review-content {
    margin-right: 2rem;
  }
`;

export default ReviewList;
