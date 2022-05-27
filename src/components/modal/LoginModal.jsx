import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { openMemberModal } from 'redux/modules/modal';
import LoginForm from 'components/form/LoginForm';

const LoginModal = () => {
  const dispatch = useDispatch();

  const handleRegistModalVisible = () => {
    dispatch(openMemberModal({ modal: 'registModal' }));
  };

  return (
    <>
      <ModalTitle>로그인</ModalTitle>
      <LoginForm />
      <ModalFooter>
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
  justify-content: flex-end;
  font-size: 1.6rem;
  padding-top: 1rem;
  button {
    all: unset;
    cursor: pointer;
  }
  .regist-btn {
    color: #02d6a8;
  }
`;
export default LoginModal;
