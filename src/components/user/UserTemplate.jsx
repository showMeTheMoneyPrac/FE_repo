import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import SideBar from './SideBar';

const UserTemplate = () => {
  return (
    <>
      <Spacer />
      <UserWrapper>
        <SideBar />
        <Outlet />
      </UserWrapper>
    </>
  );
};

const Spacer = styled.div`
  min-height: 150px;
`;

const UserWrapper = styled.div`
  display: flex;
`;

export default UserTemplate;
