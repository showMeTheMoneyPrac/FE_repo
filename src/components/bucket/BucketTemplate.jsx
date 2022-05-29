import React from 'react';
import styled from 'styled-components';

import Spacer from 'components/common/Spacer';
import BucketList from 'components/bucket/BucketList';
import BucketResult from 'components/bucket/BucketResult';

const BucketTemplate = () => {
  return (
    <>
      <Spacer />
      <BucketOuter>
        <BucketList />
        <BucketResult />
      </BucketOuter>
    </>
  );
};

const BucketOuter = styled.div`
  display: flex;
  padding: 6rem;
`;

export default BucketTemplate;
