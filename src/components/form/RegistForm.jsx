import React from 'react';
import styled from 'styled-components';

import LabelInput from 'components/form/LabelInput';
import useSearchAddress from 'hooks/useSearchAddress';

const RegistForm = () => {
  return (
    <RegistFormWrapper>
      <LabelInput
        inputId="memberId"
        inputType="text"
        labelText="아이디"
        InputPlaceholder="이메일 형식의 아이디를 입력하세요."
      />
      <LabelInput
        inputId="memberNickname"
        inputType="text"
        labelText="닉네임"
        InputPlaceholder="닉네임을 입력하세요."
      />
      <LabelInput
        inputId="memberPw"
        inputType="password"
        labelText="비밀번호"
        InputPlaceholder="비밀번호를 입력하세요."
      />
      <LabelInput
        inputId="memberPwCheck"
        inputType="password"
        labelText="비밀번호 확인"
        InputPlaceholder="비밀번호를 한번더 입력해주세요."
      />
      <SearchAddressWrapper>
        <LabelInput
          inputId="memberAddress"
          inputType="text"
          labelText="주소"
          InputPlaceholder="주소를 검색해주세요"
          readOnly={true}
        />
        <input
          className="search-address-btn"
          type="button"
          onClick={useSearchAddress}
          value="주소 검색"
        ></input>
      </SearchAddressWrapper>
      <LabelInput
        inputId="memberDetailAddress"
        inputType="text"
        labelText="상세 주소"
        InputPlaceholder="상세주소를 입력해주세요."
      />
      <button className="submit-btn">회원가입</button>
    </RegistFormWrapper>
  );
};

const RegistFormWrapper = styled.form`
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

const SearchAddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .search-address-btn {
    width: 20%;
    color: #fff;
    background-color: #000;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
  }
`;

export default RegistForm;
