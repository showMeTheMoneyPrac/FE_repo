import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import NoImage from 'components/common/NoImage';

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const handleRouteDetailPage = () => {
    navigate(`/product/${product.productId}`);
  };
  return (
    <ProoductItemWrapper>
      <ProductInfoWrapper onClick={handleRouteDetailPage}>
        <div className="product-img-wrapper">
          {product.firstImg !== 'firstImg' ? (
            <img
              src={product.firstImg}
              alt="상품이미지"
              className="product-img"
            />
          ) : (
            <NoImage size={20} />
          )}
        </div>
        <div className="product-info">
          <h4 className="product-title">{product.title}</h4>
          <h5 className="product-summary">{product.summary}</h5>
          <p className="product-category">{product.category}</p>
          <div className="product-price">
            <p>₩{product.price.toLocaleString()}</p>
          </div>
          <div className="product-subinfo">
            <p>review {product.reviewCnt}</p>
          </div>
        </div>
      </ProductInfoWrapper>
    </ProoductItemWrapper>
  );
};

const ProoductItemWrapper = styled.li`
  width: 25%;
  padding: 0 2rem 2rem 0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 0 1;
  &:nth-child(4n) {
    padding: 0 0 2rem 0;
  }
`;

const ProductInfoWrapper = styled.div`
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
  }
  .product-img-wrapper {
    width: 100%;
    height: 30rem;
    .product-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-info {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    .product-title {
      font-size: 1.6rem;
      font-weight: bold;
      margin-bottom: 1rem;
      line-height: 1.8rem;
      height: 3.6rem;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .product-summary {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1.4rem;
      color: #8e8e8e;
      margin-bottom: 1rem;
    }
    .product-category {
      width: max-content;
      font-size: 1.4rem;
      font-weight: 600;
      padding: 1rem;
      background-color: #ebebeb;
      border-radius: 1rem;
    }
    .product-price {
      padding: 1rem 0;
      text-align: center;
      font-size: 1.6rem;
      font-weight: bold;
    }
  }

  .product-subinfo {
    display: flex;
    justify-content: flex-end;
    font-size: 1.4rem;
  }
`;

export default ProductItem;
