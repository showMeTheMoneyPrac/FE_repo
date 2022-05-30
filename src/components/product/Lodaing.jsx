import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const Lodaing = () => {
  const isLoading = useSelector(({ product }) => product.isLoading);

  return (
    <LoadingWrapper>
      <p>{isLoading && '로딩중...'}</p>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  padding: 2rem 0;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Lodaing;
