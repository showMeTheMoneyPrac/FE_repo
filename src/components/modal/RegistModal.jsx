import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { closeModal, openMemberModal } from 'redux/modules/modal';
import RegistForm from 'components/form/RegistForm';
const RegistModal = () => {
  const dispatch = useDispatch();

  const handleLoginModalVisible = () => {
    dispatch(openMemberModal({ modal: 'loginModal' }));
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };
  return (
    <>
      <ModalTitle>회원가입</ModalTitle>
      <RegistForm />
      <ModalFooter>
        <button onClick={handleCloseModal} className="close-btn">
          close
        </button>
        <div>
          회원이신가요?{' '}
          <button onClick={handleLoginModalVisible} className="login-btn">
            로그인
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
  .login-btn {
    color: #02d6a8;
  }
`;

export default RegistModal;
