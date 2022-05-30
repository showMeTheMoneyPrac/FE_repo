import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const handleRouteDetailPage = () => {
    navigate(`/product/${product.productId}`);
  };
  return (
    <ProoductItemWrapper onClick={handleRouteDetailPage}>
      <ProductInfoWrapper>
        <div className="product-img-container">
          <img
            src={product.firstImg}
            alt="상품이미지"
            className="product-img"
          />
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
  width: 23%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }
  .product-img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 1.2rem;
  }

  .product-info {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    .product-title {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .product-summary {
      font-size: 1.4rem;
      color: #8e8e8e;
      margin-bottom: 0.5rem;
    }
    .product-price {
      padding: 2rem 0;
      text-align: center;
      font-size: 1.6rem;
    }
  }

  .product-subinfo {
    display: flex;
    justify-content: flex-end;
    .product-category {
      width: min-content;
      font-size: 1.4rem;
      padding: 0.5rem;
      background-color: #ebebeb;
      border-radius: 1rem;
    }
  }
`;

const ProductInfoWrapper = styled.div`
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
`;

export default ProductItem;
