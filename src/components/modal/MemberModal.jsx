import React from 'react';
import { useSelector } from 'react-redux';

import ModalOverlay from 'components/modal/ModalOverlay';
import LoginModal from 'components/modal/LoginModal';
import RegistModal from 'components/modal/RegistModal';

const MemberModal = () => {
  const memberModal = useSelector(({ modal }) => modal.memberModal);

  return (
    <ModalOverlay>
      {memberModal.loginModal ? <LoginModal /> : <RegistModal />}
    </ModalOverlay>
  );
};

export default MemberModal;
