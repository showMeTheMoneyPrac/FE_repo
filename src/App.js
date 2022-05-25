import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainPage from 'pages/MainPage';
import PurchaseList from 'components/user/PurchaseList';
import UserInfo from 'components/user/UserInfo';
import UserPage from 'pages/UserPage';
import MemberModal from 'components/modal/MemberModal';

const App = () => {
  const memberModal = useSelector(({ modal }) => modal.memberModal.isOpen);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/user" element={<UserPage />}>
            <Route path="info" element={<UserInfo />} />
            <Route path="purchase" element={<PurchaseList />} />
            <Route index element={<UserInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {memberModal && <MemberModal />}
    </>
  );
};

export default App;
