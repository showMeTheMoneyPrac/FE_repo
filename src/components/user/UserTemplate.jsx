import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import SideBar from './SideBar';
import Spacer from 'components/common/Spacer';

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

const UserWrapper = styled.div`
  display: flex;
`;

export default UserTemplate;
