import React from 'react';
import styled from 'styled-components';
import { UpCircleOutlined } from '@ant-design/icons';

const ScrollBtn = () => {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <ScrollBtnWrapper>
      <UpCircleOutlined className="scroll-btn" onClick={handleScrollTop} />
    </ScrollBtnWrapper>
  );
};

const ScrollBtnWrapper = styled.div`
  text-align: center;
  position: fixed;
  bottom: 10rem;
  left: 10rem;
  .scroll-btn {
    font-size: 3rem;
  }
`;

export default ScrollBtn;
