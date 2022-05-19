import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBar = () => {
  return (
    <SideNav>
      <h2>마이 페이지</h2>
      <ul className="nav-list">
        <li>
          <Link className="info-link" to="/user/info">
            내 정보
          </Link>
        </li>
        <li>
          <Link className="purchase-link" to="/user/purchase">
            구매 목록
          </Link>
        </li>
      </ul>
    </SideNav>
  );
};

const SideNav = styled.nav`
  background-color: pink;
  .nav-list {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    a {
      display: block;
    }
  }
`;

export default SideBar;
