import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { openMemberModal } from 'redux/modules/modal';
import RegistForm from 'components/form/RegistForm';
const RegistModal = () => {
  const dispatch = useDispatch();

  const handleLoginModalVisible = () => {
    dispatch(openMemberModal({ modal: 'loginModal' }));
  };

  return (
    <>
      <ModalTitle>회원가입</ModalTitle>
      <RegistForm />
      <ModalFooter>
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
  justify-content: flex-end;
  font-size: 1.6rem;
  padding-top: 1rem;
  button {
    all: unset;
    cursor: pointer;
  }
  .login-btn {
    color: #02d6a8;
  }
`;

export default RegistModal;
