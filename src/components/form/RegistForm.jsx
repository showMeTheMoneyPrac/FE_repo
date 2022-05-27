import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import LabelInput from 'components/form/LabelInput';
import { changeRegistFormAddress, initializeForm } from 'redux/modules/form';
import { registUserAPI } from 'api/user';
import { openMemberModal } from 'redux/modules/modal';

const RegistForm = () => {
  const dispatch = useDispatch();
  const registForm = useSelector(({ form }) => form.registForm);
  const [errorMsg, setErrorMsg] = useState(' ');

  const {
    email,
    nickname,
    baseAddress,
    detailAddress,
    password,
    passwordCheck,
  } = registForm;

  const handlelValidateEmail = (email) => {
    const regExr =
      /^[0-9a-zA-Z]*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    return regExr.test(email);
  };

  const handleValidateNickname = (nickname) => {
    const regExr = /^[0-9a-zA-Z]/;
    return regExr.test(nickname);
  };

  const handleRegist = async (e) => {
    e.preventDefault();

    const validateEmail = handlelValidateEmail(email);
    const validateNickname = handleValidateNickname(nickname);

    if (!email) {
      setErrorMsg('아이디를 입력해주세요');
      return;
    }

    if (!validateEmail) {
      setErrorMsg('아이디를 이메일 형식으로 입력해주세요');
      return;
    }

    if (!nickname) {
      setErrorMsg('닉네임을 입력해주세요');
      return;
    }

    if (!validateNickname) {
      setErrorMsg('닉네임은 영어로 적어주세요');
      return;
    }

    if (!password) {
      setErrorMsg('비밀번호를 입력해주세요');
      return;
    }

    if (!passwordCheck) {
      setErrorMsg('비밀번호 확인을 입력해주세요');
      return;
    }

    if (password !== passwordCheck) {
      setErrorMsg('비밀번호 확인이 일치하지 않습니다');
      return;
    }

    if (!baseAddress) {
      setErrorMsg('주소를 검색해주세요');
      return;
    }

    if (!detailAddress) {
      setErrorMsg('상세 주소를 입력해주세요');
      return;
    }

    const registPayload = {
      email,
      nickname,
      address: `${baseAddress} ${detailAddress}`,
      password,
      passwordCheck,
    };

    await registUserAPI(registPayload);

    dispatch(initializeForm());
    dispatch(openMemberModal({ modal: 'loginModal' }));
  };

  const handleSearchAddress = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성
        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') {
          // 사용자가 도로명 주소를 선택했을 경우
          dispatch(changeRegistFormAddress(data.roadAddress));
        } else {
          // 사용자가 지번 주소를 선택했을 경우(J)
          dispatch(changeRegistFormAddress(data.jibunAddress));
        }
      },
    }).open();
  };

  return (
    <RegistFormWrapper onSubmit={handleRegist}>
      <LabelInput
        inputId="email"
        inputType="text"
        labelText="아이디"
        inputPlaceholder="이메일 형식의 아이디를 입력하세요."
        form="registForm"
      />
      <LabelInput
        inputId="nickname"
        inputType="text"
        labelText="닉네임"
        inputPlaceholder="닉네임을 입력하세요."
        form="registForm"
      />
      <LabelInput
        inputId="password"
        inputType="password"
        labelText="비밀번호"
        inputPlaceholder="비밀번호를 입력하세요."
        form="registForm"
      />
      <LabelInput
        inputId="passwordCheck"
        inputType="password"
        labelText="비밀번호 확인"
        inputPlaceholder="비밀번호를 한번더 입력해주세요."
        form="registForm"
      />
      <SearchAddressWrapper>
        <LabelInput
          inputId="baseAddress"
          inputType="text"
          labelText="주소"
          inputPlaceholder="주소를 검색해주세요"
          readOnly={true}
          value={baseAddress}
        />
        <input
          className="search-address-btn"
          type="button"
          value="주소 검색"
          onClick={handleSearchAddress}
        ></input>
      </SearchAddressWrapper>
      <LabelInput
        inputId="detailAddress"
        inputType="text"
        labelText="상세 주소"
        inputPlaceholder="상세주소를 입력해주세요."
        form="registForm"
      />
      <button className="submit-btn">회원가입</button>
      <ErrorMsg>{errorMsg}</ErrorMsg>
    </RegistFormWrapper>
  );
};

const RegistFormWrapper = styled.form`
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

const SearchAddressWrapper = styled.div`
  display: flex;
  .search-address-btn {
    width: 20%;
    color: #fff;
    background-color: #000;
    margin: 2rem 0 0 2rem;
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
  }
`;

const ErrorMsg = styled.p`
  font-size: 1.4rem;
  color: #ff0000;
  height: 1.4rem;
`;

export default RegistForm;
