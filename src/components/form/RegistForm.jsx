import React from 'react';
import styled from 'styled-components';

import LabelInput from 'components/form/LabelInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeRegistForm, changeRegistFormAddress } from 'redux/modules/form';
import { registUser } from 'api/user';

const RegistForm = () => {
  const dispatch = useDispatch();
  const baseAddress = useSelector(({ form }) => form.registForm.baseAddress);
  const registForm = useSelector(({ form }) => form.registForm);

  const handleRegist = async (e) => {
    e.preventDefault();
    const inputTarget = e.target;

    const payload = {
      email: inputTarget[0].value,
      nickname: inputTarget[1].value,
      password: inputTarget[2].value,
      passwordCheck: inputTarget[3].value,
      baseAddress: inputTarget[4].value,
      detailAddress: inputTarget[6].value,
    };
    await dispatch(changeRegistForm(payload));

    const registPayload = {
      email: registForm.email,
      nickname: registForm.nickname,
      address: registForm.baseAddress + registForm.detailAddress,
      password: registForm.password,
      passwordCheck: registForm.passwordCheck,
    };

    const res = await registUser(registPayload);

    console.log(res);
  };

  const handleSearchAddress = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성

        // 각 주소의 노출 규칙에 따라 주소를 조합한다.

        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') {
          // 사용자가 도로명 주소를 선택했을 경우
          // setAddress(data.roadAddress);
          dispatch(changeRegistFormAddress(data.roadAddress));
        } else {
          // 사용자가 지번 주소를 선택했을 경우(J)
          // setAddress(data.jibunAddress);
          dispatch(changeRegistFormAddress(data.jibunAddress));
        }
        // setAddress(addr);
        // 커서를 상세주소 필드로 이동한다.
        // document.getElementById('memberDetailAddress').focus();
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
      />
      <LabelInput
        inputId="nickname"
        inputType="text"
        labelText="닉네임"
        inputPlaceholder="닉네임을 입력하세요."
      />
      <LabelInput
        inputId="password"
        inputType="password"
        labelText="비밀번호"
        inputPlaceholder="비밀번호를 입력하세요."
      />
      <LabelInput
        inputId="passwordCheck"
        inputType="password"
        labelText="비밀번호 확인"
        inputPlaceholder="비밀번호를 한번더 입력해주세요."
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
