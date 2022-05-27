import React from 'react';
import styled from 'styled-components';
const ProductItem = () => {
  return (
    <ProoductItemWrapper>
      <div className="product-img-container">
        <img
          // firstImg
          src={
            'https://kream-phinf.pstatic.net/MjAyMTEwMjVfMjk2/MDAxNjM1MTQyNzkyMTMx.fIJHqENLC9yP0OSlFXPaFtZ48eRfOHPBlOaqgYZJjbQg.S42C9McCEAt6Y62aTZkSIu2WgtbkinfC0e-5PGfbfbMg.JPEG/a_28980a81db88429fa0dc21ce120f6878.jpg?type=m_webp'
          }
          alt="상품이미지"
          className="product-img"
        />
      </div>
      <div className="product-info">
        <h4 className="product-title">title</h4>
        <p className="product-category">category</p>
        <div className="product-price">
          <p>₩{Number(50000000).toLocaleString('en')}</p>
        </div>
        <div className="product-subinfo">
          <p>review reviewCnt</p>
        </div>
      </div>
    </ProoductItemWrapper>
  );
};

const ProoductItemWrapper = styled.li`
  width: 23%;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
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

export default ProductItem;
