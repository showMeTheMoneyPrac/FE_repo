import React from 'react';
import styled from 'styled-components';

import LabelInput from 'components/form/LabelInput';

const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <LabelInput
        inputId="memberId"
        inputType="text"
        labelText="아이디"
        inputPlaceholder="아이디를 입력하세요."
      />
      <LabelInput
        inputId="memberPw"
        inputType="password"
        labelText="비밀번호"
        inputPlaceholder="비밀번호를 입력하세요."
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
