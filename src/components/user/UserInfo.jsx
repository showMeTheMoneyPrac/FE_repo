import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fetchUserInfo } from 'api/user';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await fetchUserInfo();
      setUserInfo(data);
    };

    fetchUser();
  }, []);

  return (
    <UserInfoWrapper>
      <h3 className="user-info-title">내 정보</h3>
      <div className="info-container">
        <h4 className="info-title">닉네임</h4>
        <p className="info-content">{userInfo?.nickname}</p>
        <button className="info-btn">닉네임 수정</button>
      </div>
      <div className="info-container">
        <h4 className="info-title">잔여 포인트</h4>
        <p className="info-content">{userInfo?.cash}</p>
        <button className="info-btn">포인트 충전</button>
      </div>
      <div className="info-container">
        <h4 className="info-title">주소</h4>
        <p className="info-content">{userInfo?.address}</p>
        <button className="info-btn">주소 수정</button>
      </div>
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 6rem;
  .user-info-title {
    font-size: 2.4rem;
    font-weight: bold;
    padding-bottom: 2rem;
    border-bottom: 3px solid #000;
  }
  .info-container {
    padding: 2rem 0;
    border-bottom: 1px solid #dedede;
  }
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
    color: #fff;
    padding: 0.6rem 1.2rem;
    border-radius: 0.8rem;
  }
`;

export default UserInfo;
