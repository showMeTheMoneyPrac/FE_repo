import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import LabelInput from 'components/form/LabelInput';
import { closeModal } from 'redux/modules/modal';
import { initializeForm } from 'redux/modules/form';
import { loginUserAPI } from 'api/user';
import { userLogin } from 'redux/modules/user';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState('');
  const loginForm = useSelector(({ form }) => form.loginForm);
  const { email, password } = loginForm;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg('아이디를 입력해주세요');
      return;
    }

    if (!password) {
      setErrorMsg('비밀번호를 입력해주세요');
      return;
    }

    const loginPayload = {
      email,
      password,
    };

    const { data } = await loginUserAPI(loginPayload);

    localStorage.setItem('nickname', data.nickname);
    dispatch(userLogin());
    dispatch(closeModal());
    dispatch(initializeForm());
  };

  return (
    <LoginFormWrapper onSubmit={handleLogin}>
      <LabelInput
        inputId="email"
        inputType="text"
        labelText="아이디"
        inputPlaceholder="아이디를 입력하세요."
        form="loginForm"
      />
      <LabelInput
        inputId="password"
        inputType="password"
        labelText="비밀번호"
        inputPlaceholder="비밀번호를 입력하세요."
        form="loginForm"
      />
      <button className="submit-btn">로그인</button>
      <ErrorMsg>{errorMsg}</ErrorMsg>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  gap: 1.5rem;
  .submit-btn {
    background-color: #000;
    color: #fff;
    font-size: 1.6rem;
    border-radius: 1rem;
    padding: 1rem;
  }
`;

const ErrorMsg = styled.p`
  font-size: 1.4rem;
  color: #ff0000;
  height: 1.4rem;
`;

export default LoginForm;
