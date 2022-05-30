import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { fetchProductDetailAPI } from 'api/product';
import { createCartItemAPI } from 'api/cart';
import { useSelector } from 'react-redux';

const ProductDetail = ({ match }) => {
  const { productId } = useParams();
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);
  const [product, setProduct] = useState({});
  const [visibleImg, setVisibleImg] = useState(null);
  const [count, setCount] = useState(1);
  const [option, setOption] = useState('');

  const handleChangeVisibleImg = (e) => {
    setVisibleImg(e.target.id);
  };

  const handleChangeOption = (e) => {
    setOption(e.target.value);
  };

  const handleCreateCartItem = async () => {
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      return;
    }

    const payload = {
      option,
      price: product.price,
      ea: +count,
    };

    await createCartItemAPI({ productId: product.productId, payload });
  };

  useEffect(() => {
    const getDeatail = async () => {
      const res = await fetchProductDetailAPI(productId);
      setProduct(res.data);
      setVisibleImg(0);
    };
    getDeatail();
  }, []);
  console.log(product);
  // console.log(product.imgList[visibleImg]);
  return (
    <ProductDetailWrapper>
      <ProductImgList>
        {product.imgList &&
          product.imgList.map((img, i) => {
            return (
              <ProductImgItem key={i}>
                <img
                  id={i}
                  src={img}
                  alt="상품이미지"
                  onClick={handleChangeVisibleImg}
                />
              </ProductImgItem>
            );
          })}
      </ProductImgList>
      <VisibleImgWrapper
        src={product.imgList && product?.imgList[visibleImg]}
        alt="이미지"
      />
      <ProductInfoWrapper>
        <ProductTitle>{product.title}</ProductTitle>
        <Detail>{product.detail}</Detail>
        <Category>{product.category}</Category>
        <Price>
          <p>₩{product.price && product.price.toLocaleString()}</p>
        </Price>
        <div>옵션</div>
        <div>
          {product.optionList &&
            product?.optionList.map((option, i) => (
              <input
                key={i}
                defaultValue={option}
                onClick={handleChangeOption}
              />
            ))}
        </div>
        <div>주문 수량</div>
        <CountWrapper>
          <button
            onClick={() => {
              if (count === 0) return;
              setCount(count - 1);
            }}
          >
            -
          </button>
          <input type="text" value={count} />
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </CountWrapper>
        <ButtonWrapper>
          <button>바로 구매하기</button>
          <button onClick={handleCreateCartItem}>장바구니 담기</button>
        </ButtonWrapper>
      </ProductInfoWrapper>
      <ul>{product.reviewList}</ul>
    </ProductDetailWrapper>
  );
};

const ProductDetailWrapper = styled.section`
  display: flex;
  padding: 4rem 3rem;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`;

const ProductTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  padding-bottom: 2rem;
`;

const Detail = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 2rem 0;
  color: #8e8e8e;
`;

const Category = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  background-color: #cecece;
  width: max-content;
  padding: 1rem;
  border-radius: 1rem;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem 0;
`;

const ProductImgList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-right: 1rem;
`;

const ProductImgItem = styled.li`
  text-align: center;
  border: 0.1rem solid #cecece;
  cursor: pointer;
  img {
    width: 6rem;
    object-fit: cover;
  }
`;

const VisibleImgWrapper = styled.img`
  width: 40%;
  object-fit: cover;
`;

const CountWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  input {
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  justify-content: flex-end;
  font-size: 1.6rem;
  gap: 2rem;
  button {
    color: #fff;
    background-color: #000;
    padding: 2rem;
    border-radius: 1rem;
  }
`;

export default ProductDetail;
