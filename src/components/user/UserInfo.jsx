import React from 'react';
import styled from 'styled-components';

const UserInfo = () => {
  const userInfo = {
    nickname: '동찬',
    cash: 10000,
    address: '서울시 관악구 남현동',
  };
  return (
    <UserInfoWrapper>
      <h3 className="user-info-title">내 정보</h3>
      <div className="info-container">
        <h4 className="info-title">닉네임</h4>
        <p className="info-content">{userInfo.nickname}</p>
        <button className="info-btn">닉네임 수정</button>
      </div>
      <div className="info-container">
        <h4 className="info-title">잔여 포인트</h4>
        <p className="info-content">{userInfo.cash}</p>
        <button className="info-btn">포인트 충전</button>
      </div>
      <div className="info-container">
        <h4 className="info-title">주소</h4>
        <p className="info-content">{userInfo.address}</p>
        <button className="info-btn">주소 수정</button>
      </div>
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3rem 6rem;
  .user-info-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 4rem;
  }
  .info-container {
    margin-bottom: 2rem;
  }
  .info-title {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    color: #ccc;
  }
  .info-content {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
  .info-btn {
    display: inline-flex;
    background-color: #222;
    color: #fff;
    padding: 0.6rem 1.2rem;
    border-radius: 0.8rem;
  }
`;

export default UserInfo;
