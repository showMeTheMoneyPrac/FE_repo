import React from 'react';
import styled from 'styled-components';
import { CheckCircleOutlined } from '@ant-design/icons';

const StyledCheckbox = ({ isSelected }) => {
  return <Checkbox $isSelected={isSelected} />;
};

const Checkbox = styled(CheckCircleOutlined)`
  font-size: 2rem;
  color: ${(props) => (props.$isSelected ? '#02D6a8' : '#cecece')};
  cursor: pointer;
`;

export default StyledCheckbox;
