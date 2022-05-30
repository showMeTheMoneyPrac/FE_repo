import React from 'react';
import styled from 'styled-components';
import { FileImageOutlined } from '@ant-design/icons';

const NoImage = ({ size }) => {
  return (
    <NoImageWrapper size={size}>
      <FileImageOutlined />
    </NoImageWrapper>
  );
};

const NoImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => `${props.size}rem`};
  color: #cecece;
  width: 100%;
  height: 100%;
`;

export default NoImage;
