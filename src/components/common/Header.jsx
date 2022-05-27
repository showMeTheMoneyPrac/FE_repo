import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { openMemberModal } from 'redux/modules/modal';
import SearchBar from './SearchBar';
import MemberModal from 'components/modal/MemberModal';

const Header = () => {
  const dispatch = useDispatch();

  const memberModal = useSelector(({ modal }) => modal.memberModal.isOpen);

  const handleLoginModalVisible = () => {
    dispatch(openMemberModal({ modal: 'loginModal' }));
  };
  return (
    <>
      <HeaderWrapper>
        <TopWrapper>
          <Logo>
            <Link
              to="/"
              onClick={() => {
                window.onload();
              }}
            >
              C#
            </Link>
          </Logo>
          <nav>
            <HeaderNavList>
              <li>
                <button onClick={handleLoginModalVisible}>로그인</button>
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
      {memberModal && <MemberModal />}
    </>
  );
};

const HeaderWrapper = styled.header`
  padding: 0 3rem;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(26, 31, 22, 0.15);
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const TopWrapper = styled.div`
  padding: 2rem 0;
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
