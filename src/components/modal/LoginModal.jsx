import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { closeModal, openMemberModal } from 'redux/modules/modal';
import LoginForm from 'components/form/LoginForm';

const LoginModal = () => {
  const dispatch = useDispatch();

  const handleRegistModalVisible = () => {
    dispatch(openMemberModal({ modal: 'registModal' }));
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };
  return (
    <>
      <ModalTitle>로그인</ModalTitle>
      <LoginForm />
      <ModalFooter>
        <button onClick={handleCloseModal} className="close-btn">
          close
        </button>
        <div>
          회원이 아니신가요?{' '}
          <button onClick={handleRegistModalVisible} className="regist-btn">
            회원가입
          </button>
        </div>
      </ModalFooter>
    </>
  );
};

const ModalTitle = styled.h2`
  font-size: 2.2rem;
  letter-spacing: 0.5rem;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  button {
    all: unset;
    cursor: pointer;
  }
  .close-btn {
    padding-left: 1rem;
  }
  .regist-btn {
    color: #02d6a8;
  }
`;
export default LoginModal;
