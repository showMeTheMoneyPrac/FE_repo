import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

import StyledCheckbox from 'components/common/StyledCheckbox';
import { removeBucketItem, selectBucketItem } from 'redux/modules/bucket';
import NoImage from 'components/common/NoImage';

const BucketItem = ({ bucketItem }) => {
  const dispatch = useDispatch();
  const selectedList = useSelector(({ bucket }) => bucket.selectedList);

  const handleSelectProduct = (e) => {
    if (e.target.checked) {
      dispatch(selectBucketItem({ type: false, id: +e.target.id }));
    } else {
      dispatch(selectBucketItem({ type: true, id: +e.target.id }));
    }
  };

  const handleRemoveProduct = (e) => {
    dispatch(removeBucketItem(e.target.id));
  };

  return (
    <BucketItemWrapper>
      <label htmlFor={bucketItem.cartId}>
        <input
          onChange={handleSelectProduct}
          id={bucketItem.cartId}
          className="a11y-hidden"
          type="checkbox"
        />
        <StyledCheckbox
          isSelected={selectedList?.includes(bucketItem.cartId)}
        />
      </label>
      <Link to={`/product/${bucketItem.productId}`} className="product-link">
        {bucketItem.firstImg !== '123' ? (
          <img
            className="product-img"
            src={bucketItem.firstImg}
            alt="product-img"
          />
        ) : (
          <NoImage size="6" />
        )}
      </Link>
      <Link to={`/product/${bucketItem.productId}`} className="product-title">
        <h3>{bucketItem.title}</h3>
      </Link>
      <ProductCountWrapper>
        <button disabled={bucketItem.ea <= 1} className="decrease-btn">
          <MinusOutlined />
        </button>
        <input
          value={bucketItem.ea}
          className="product-count"
          type="text"
          readOnly
        />
        <button className="increase-btn">
          <PlusOutlined />
        </button>
      </ProductCountWrapper>
      <p className="product-price">
        {(bucketItem.bill * bucketItem.ea).toLocaleString()}원
      </p>
      <button
        onClick={handleRemoveProduct}
        id={bucketItem.cartId}
        className="delete-btn"
      >
        <CloseOutlined />
      </button>
    </BucketItemWrapper>
  );
};

const BucketItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid #cecece;
  .product-link {
    width: 6rem;
    height: 6rem;
  }
  .product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .product-title {
    font-size: 1.6rem;
    font-weight: bold;
    flex: 1;
    line-height: 2rem;
    max-height: 1.8rem;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .product-price {
    min-width: 10rem;
    font-size: 1.6rem;
    text-align: center;
  }
  .delete-btn {
    font-size: 1.6rem;
    color: #cecece;
    > * {
      pointer-events: none;
    }
  }
`;

const ProductCountWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #cecece;
  border-radius: 0.3rem;
  padding: 0.3rem 0.6rem;
  .product-count {
    width: 3rem;
    font-size: 1.4rem;
    text-align: center;
  }
  .increase-btn,
  .decrease-btn {
    display: flex;
    font-size: 1.4rem;
  }
`;

export default BucketItem;
