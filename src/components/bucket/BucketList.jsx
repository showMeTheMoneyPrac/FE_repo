import React, { useEffect } from 'react';
import styled from 'styled-components';

import BucketItem from 'components/bucket/BucketItem';
import StyledCheckbox from 'components/common/StyledCheckbox';
import {
  initBucketList,
  removeBucketItem,
  selectAllBucketItem,
} from 'redux/modules/bucket';
import { useDispatch, useSelector } from 'react-redux';

const BucketList = () => {
  const dispatch = useDispatch();
  const bucketList = useSelector(({ bucket }) => bucket.bucketList);
  const selectedList = useSelector(({ bucket }) => bucket.selectedList);

  useEffect(() => {
    dispatch(initBucketList());
  }, [dispatch]);

  const handleSelectAllProduct = (e) => {
    if (e.target.checked) {
      dispatch(selectAllBucketItem(true));
    } else {
      dispatch(selectAllBucketItem(false));
    }
  };

  const handleRemoveBucketItem = () => {
    if (!selectedList.length) return;
    const stringParam = selectedList.join();
    dispatch(removeBucketItem(stringParam));
  };

  return (
    <BucketInner>
      <h2 className="bucket-title">장바구니</h2>
      <ul className="bucket-list">
        {bucketList.length ? (
          bucketList.map((bucketItem) => (
            <BucketItem bucketItem={bucketItem} key={bucketItem.productId} />
          ))
        ) : (
          <EmptyBucket>
            <p className="empty-comment">장바구니에 담긴 상품이 없습니다</p>
          </EmptyBucket>
        )}
      </ul>
      <ItemSelectorWrapper>
        <div className="all-selector">
          <label htmlFor="allSelector">
            <input
              disabled={!bucketList.length}
              onChange={handleSelectAllProduct}
              checked={bucketList.length === selectedList.length}
              id="allSelector"
              className="a11y-hidden"
              type="checkbox"
            />
            {bucketList.length ? (
              <StyledCheckbox
                isSelected={bucketList.length === selectedList.length}
              />
            ) : (
              <StyledCheckbox />
            )}
          </label>
          <span className="selector-text">전체 선택</span>
        </div>
        <button onClick={handleRemoveBucketItem} className="delete-btn">
          선택 삭제
        </button>
      </ItemSelectorWrapper>
    </BucketInner>
  );
};

const BucketInner = styled.section`
  flex: 1;
  margin-right: 2rem;
  .bucket-title {
    font-size: 2.2rem;
    font-weight: bold;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 3px solid #000;
  }
`;

const ItemSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  .all-selector {
    display: flex;
    align-items: center;
    &:after {
      display: block;
      content: '';
      width: 1px;
      height: 1.4rem;
      border-right: 1px solid #cecece;
    }
    .selector-text {
      display: block;
      font-size: 1.4rem;
      font-weight: bold;
      padding: 0 2rem;
    }
  }
  .delete-btn {
    all: unset;
    padding: 0 2rem;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

const EmptyBucket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  .empty-comment {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

export default BucketList;
