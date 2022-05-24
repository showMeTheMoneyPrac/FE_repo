import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <SideNav>
      <h2 className="nav-title">마이 페이지</h2>
      <ul className="nav-list">
        <li>
          <StyledLink
            $current={pathname !== '/user/purchase'}
            className="info-link"
            to="/user/info"
          >
            내 정보
          </StyledLink>
        </li>
        <li>
          <StyledLink
            $current={pathname === '/user/purchase'}
            className="purchase-link"
            to="/user/purchase"
          >
            구매 목록
          </StyledLink>
        </li>
      </ul>
    </SideNav>
  );
};

const SideNav = styled.nav`
  background-color: #fff;
  padding: 6rem 3rem;
  .nav-title {
    font-size: 2rem;
    font-weight: bold;
  }
  .nav-list {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 1.6rem;
  font-weight: ${(props) => (props.$current ? 'bold' : 'normal')};
`;

export default SideBar;
