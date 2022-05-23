import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <HeaderWrapper>
      <TopWrapper>
        <Logo>
          <Link to="/">C#</Link>
        </Logo>
        <nav>
          <HeaderNavList>
            <li>
              <button>로그인</button>
            </li>
            <li>
              <Link to="/user">마이페이지</Link>
            </li>
            <li>
              <Link to="/bucket">장바구니</Link>
            </li>
          </HeaderNavList>
        </nav>
      </TopWrapper>
      <SearchBar />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(26, 31, 22, 0.15);
  background-color: #fff;
  position: fixed;
  top: 0;
`;

const TopWrapper = styled.div`
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 2.2rem;
`;

const HeaderNavList = styled.ul`
  display: flex;
  gap: 2rem;
  font-size: 1.6rem;
  button {
    all: unset;
    cursor: pointer;
  }
`;

export default Header;
