import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './SideBar';

const UserTemplate = () => {
  return (
    <UserWrapper>
      <SideBar />
      <Outlet />
    </UserWrapper>
  );
};

const UserWrapper = styled.div`
  height: 100%;
  display: flex;
  background-color: skyblue;
`;

export default UserTemplate;
