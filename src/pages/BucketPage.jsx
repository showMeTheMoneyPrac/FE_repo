import React from 'react';
import { Navigate } from 'react-router-dom';

import Header from 'components/common/Header';
import BucketTemplate from 'components/bucket/BucketTemplate';

const BucketPage = () => {
  const isLoggedIn = localStorage.getItem('nickname');

  if (!isLoggedIn) return <Navigate replace to="/" />;
  return (
    <>
      <Header />
      <BucketTemplate />
    </>
  );
};

export default BucketPage;
