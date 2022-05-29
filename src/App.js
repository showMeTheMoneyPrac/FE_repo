import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import PurchaseList from 'components/user/PurchaseList';
import UserInfo from 'components/user/UserInfo';
import UserPage from 'pages/UserPage';
import BucketPage from 'pages/BucketPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<MainPage />} />
          <Route path="/bucket" element={<BucketPage />} />
          <Route path="/user" element={<UserPage />}>
            <Route path="info" element={<UserInfo />} />
            <Route path="purchase" element={<PurchaseList />} />
            <Route index element={<UserInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
