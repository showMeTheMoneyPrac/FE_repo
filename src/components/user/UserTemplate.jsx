import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import SideBar from './SideBar';

const UserTemplate = () => {
  return (
    <Inner>
      <Spacer />
      <UserWrapper>
        <SideBar />
        <Outlet />
      </UserWrapper>
    </Inner>
  );
};

const Inner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  min-height: 152px;
`;

const UserWrapper = styled.div`
  height: 100%;
  display: flex;
  background-color: skyblue;
`;

export default UserTemplate;
