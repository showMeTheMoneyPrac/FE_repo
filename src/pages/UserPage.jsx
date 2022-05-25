import React from 'react';
import { Navigate } from 'react-router-dom';

import Header from 'components/common/Header';
import UserTemplate from 'components/user/UserTemplate';

const UserPage = () => {
  const isLoggedIn = localStorage.getItem('nickname');

  if (!isLoggedIn) return <Navigate replace to="/" />;

  return (
    <>
      <Header />
      <UserTemplate />
    </>
  );
};

export default UserPage;
