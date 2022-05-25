import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import LabelInput from 'components/form/LabelInput';
import { loginUser } from 'api/user';
import { closeModal } from 'redux/modules/modal';
import { initializeForm } from 'redux/modules/form';

const LoginForm = () => {
  const dispatch = useDispatch();
  const loginForm = useSelector(({ form }) => form.loginForm);

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginPayload = {
      email: loginForm.email,
      password: loginForm.password,
    };
    console.log(loginForm);

    const res = await loginUser(loginPayload);

    localStorage.setItem('nickname', res.data.nickname);
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
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 2rem;
  .submit-btn {
    background-color: #000;
    color: #fff;
    font-size: 1.6rem;
    border-radius: 1rem;
    padding: 1rem;
  }
`;

export default LoginForm;
