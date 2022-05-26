import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import ModalOverlay from 'components/modal/ModalOverlay';
import { closeModal } from 'redux/modules/modal';

const ReviewModal = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <ModalOverlay>
      <Title>리뷰</Title>
      <ReviewForm>
        <label className="review-label" htmlFor="reviewTitle">
          제목
        </label>
        <input
          placeholder="리뷰 제목을 입력하세요."
          id="reviewTitle"
          className="title-input"
          type="text"
        />
        <label className="review-label" htmlFor="reviewContent">
          내용
        </label>
        <textarea
          placeholder="리뷰 내용을 입력하세요."
          id="reviewContent"
          className="content-input"
          rows="5"
        />
        <ReviewActionButtonWrapper>
          <button className="submit-btn">작성</button>
          <button onClick={handleCloseModal} className="close-btn">
            취소
          </button>
        </ReviewActionButtonWrapper>
      </ReviewForm>
    </ModalOverlay>
  );
};

const Title = styled.h5`
  font-size: 2rem;
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  .review-label {
    font-size: 1.6rem;
    margin-top: 1rem;
  }
  .title-input,
  .content-input {
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
    border-radius: 1rem;
  }
`;

const ReviewActionButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-top: 1rem;
  > button {
    font-size: 1.4rem;
    background-color: #222;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 0.8rem;
  }
  .close-btn {
    background-color: #cecece;
  }
`;

export default ReviewModal;
