import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import Modal from 'components/modal/Modal';
import { closeModal } from 'redux/modules/modal';

const ModalOverlay = ({ children }) => {
  const dispatch = useDispatch();

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  return (
    <Modal>
      <ModalOverlayWrapper onClick={handleCloseModal}>
        <ModalWrapper>{children}</ModalWrapper>
      </ModalOverlayWrapper>
    </Modal>
  );
};

const ModalOverlayWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const ModalWrapper = styled.div`
  background-color: #fff;
  width: 50rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
`;
export default ModalOverlay;
