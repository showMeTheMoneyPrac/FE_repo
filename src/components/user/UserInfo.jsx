import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { updateUserInfo, fetchUserInfo } from 'api/user';
import useToggle from 'hooks/useToggle';
import useInput from 'hooks/useInput';
import WithdrawalForm from 'components/user/WithdrawalForm';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { inputValue, setInputValue, handleChangeInput } = useInput({
    nickname: '',
    cash: '',
    address: '',
    detailAddress: '',
  });
  const { infoToggleState, handleToggleState } = useToggle();
  const isLoggedIn = localStorage.getItem('nickname');

  useEffect(() => {
    const handleFetchUserInfo = async () => {
      const { data } = await fetchUserInfo();
      setUserInfo(data);
    };
    if (isLoggedIn) {
      handleFetchUserInfo();
    }
  }, [isLoggedIn]);

  const handleSearchAddress = () => {
    setInputValue((prev) => ({ ...prev, address: '' }));
    new window.daum.Postcode({
      oncomplete: function (data) {
        if (data.userSelectedType === 'R') {
          setInputValue((prev) => ({ ...prev, address: data.roadAddress }));
        } else {
          setInputValue((prev) => ({ ...prev, address: data.jibunAddress }));
        }
      },
    }).open();
  };

  const handleChangeAddress = (e) => {
    handleSearchAddress(e);
    handleToggleState(e);
  };

  const handleSubmitNickname = async (e) => {
    e.preventDefault();

    try {
      const { data } = await updateUserInfo(
        {
          beforeNickname: userInfo.nickname,
          afterNickname: inputValue.nickname,
        },
        'nickname',
      );
      localStorage.setItem('nickname', data.afterNickname);
      setUserInfo((prev) => ({ ...prev, nickname: data.afterNickname }));
      handleToggleState(e);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmitCash = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateUserInfo(
        {
          leftCash: userInfo.cash,
          chargeCash: inputValue.cash,
        },
        'cash',
      );
      setUserInfo((prev) => ({ ...prev, cash: data.totalCash }));
      handleToggleState(e);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmitAddress = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateUserInfo(
        {
          beforeAddress: userInfo.address,
          afterAddress: `${inputValue.address} ${inputValue.detailAddress}`,
        },
        'address',
      );
      setUserInfo((prev) => ({ ...prev, address: data.afterAddress }));
      handleToggleState(e);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserInfoWrapper>
      <h3 className="user-info-title">내 정보</h3>
      <InfoWrapper $isActive={infoToggleState.nickname !== true}>
        <h4 className="info-title">닉네임</h4>
        <p className="info-content">{userInfo?.nickname}</p>
        {!infoToggleState.nickname ? (
          <button
            onClick={handleToggleState}
            name="nickname"
            className="info-btn"
          >
            닉네임 변경
          </button>
        ) : (
          <InfoChangeForm name="nickname" onSubmit={handleSubmitNickname}>
            <label htmlFor="userNickname">새로운 닉네임</label>
            <input
              onChange={handleChangeInput}
              name="nickname"
              id="userNickname"
              type="text"
            />
            <ActionBtnWrapper>
              <button className="submit-btn">저장</button>
              <button
                onClick={handleToggleState}
                name="nickname"
                className="cancel-btn"
              >
                취소
              </button>
            </ActionBtnWrapper>
          </InfoChangeForm>
        )}
      </InfoWrapper>
      <InfoWrapper $isActive={infoToggleState.cash !== true}>
        <h4 className="info-title">잔여 포인트</h4>
        <p className="info-content">{userInfo?.cash}</p>
        {!infoToggleState.cash ? (
          <button onClick={handleToggleState} name="cash" className="info-btn">
            포인트 충전
          </button>
        ) : (
          <InfoChangeForm onSubmit={handleSubmitCash} name="cash">
            <label htmlFor="userCash">충전할 포인트</label>
            <input
              onChange={handleChangeInput}
              name="cash"
              id="userCash"
              type="text"
            />
            <ActionBtnWrapper>
              <button className="submit-btn">저장</button>
              <button
                onClick={handleToggleState}
                name="cash"
                className="cancel-btn"
              >
                취소
              </button>
            </ActionBtnWrapper>
          </InfoChangeForm>
        )}
      </InfoWrapper>
      <InfoWrapper $isActive={infoToggleState.address !== true}>
        <h4 className="info-title">주소</h4>
        <p className="info-content">{userInfo?.address}</p>
        {!infoToggleState.address ? (
          <button
            onClick={handleChangeAddress}
            name="address"
            className="info-btn"
          >
            주소 변경
          </button>
        ) : (
          <InfoChangeForm onSubmit={handleSubmitAddress} name="address">
            <label htmlFor="userAddress">변경 주소</label>
            <input
              value={inputValue.address}
              readOnly
              id="userAddress"
              type="text"
            />
            <label htmlFor="userDetailAddress">상세 주소</label>
            <input
              onChange={handleChangeInput}
              name="detailAddress"
              id="userDetailAddress"
              type="text"
            />
            <ActionBtnWrapper>
              <button className="submit-btn">저장</button>
              <button
                onClick={handleToggleState}
                name="address"
                className="cancel-btn"
              >
                취소
              </button>
            </ActionBtnWrapper>
          </InfoChangeForm>
        )}
      </InfoWrapper>
      <DeleteBtnWrapper>
        <button
          onClick={handleToggleState}
          name="withdrawal"
          className="delete-btn"
        >
          회원 탈퇴
        </button>
      </DeleteBtnWrapper>
      {infoToggleState.withdrawal && (
        <WithdrawalForm handleToggleState={handleToggleState} />
      )}
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 6rem;
  .user-info-title {
    font-size: 2.2rem;
    font-weight: bold;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 3px solid #000;
  }
  .info-container {
    padding: 2rem 0;
    border-bottom: 1px solid #cecece;
  }
`;

const InfoWrapper = styled.div`
  padding: 2rem 0;
  border-bottom: ${(props) => props.$isActive && '1px solid #cecece'};
  .info-title {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    color: #8e8e8e;
  }
  .info-content {
    margin-bottom: 2rem;
    font-size: 1.6rem;
  }
  .info-btn {
    display: inline-flex;
    background-color: #222;
    font-size: 1.4rem;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 0.8rem;
  }
`;

const InfoChangeForm = styled.form`
  display: flex;
  flex-direction: column;
  > label {
    font-size: 1.4rem;
    color: #8e8e8e;
    margin-bottom: 1rem;
  }
  > input {
    padding-bottom: 1rem;
    border-bottom: 1px solid #cecece;
    &:focus {
      border-bottom: 1px solid #000;
    }
    &[id='userAddress'] {
      margin-bottom: 2rem;
    }
  }
`;

const ActionBtnWrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin-top: 2rem;
  > .cancel-btn {
    background-color: #cecece;
    font-size: 1.4rem;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 0.8rem;
  }
  .submit-btn {
    background-color: #222;
    font-size: 1.4rem;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 0.8rem;
  }
`;

const DeleteBtnWrapper = styled.div`
  margin-top: 2.8rem;
  .delete-btn {
    font-size: 1.4rem;
    color: #8e8e8e;
    letter-spacing: -0.1rem;
    padding: 0.2rem 0;
    border-bottom: 1px solid #cecece;
  }
`;

export default UserInfo;
