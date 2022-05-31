import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { fetchProductDetailAPI } from 'api/product';
import { createCartItemAPI } from 'api/cart';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseNowAPI } from 'api/purchase';
import { fetchUserInfo } from 'redux/modules/user';
import ReviewList from './ReviewList';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [visibleImg, setVisibleImg] = useState(null);
  const [count, setCount] = useState(0);
  const [option, setOption] = useState('');
  const userInfo = useSelector(({ user }) => user.userInfo);

  useEffect(() => {
    if (localStorage.getItem('nickname')) dispatch(fetchUserInfo());
  }, [dispatch]);

  const handleChangeVisibleImg = (e) => {
    setVisibleImg(e.target.id);
  };

  const handleChangeOption = (e) => {
    setOption(e.target.value);
  };

  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  const handleDecreaseCount = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const handleCreateCartItem = async () => {
    if (!userInfo) {
      alert('로그인이 필요합니다.');
      return;
    }
    if (!option) {
      alert('옵션을 선택해주세요');
      return;
    }

    if (count === 0) {
      alert('수량을 선택해주세요');
      return;
    }

    const payload = {
      option,
      price: product.price,
      ea: +count,
    };

    await createCartItemAPI({ productId: product.productId, payload });
  };

  const handleBuyNow = async () => {
    if (!userInfo) {
      alert('로그인이 필요합니다.');
      return;
    }
    if (!option) {
      alert('옵션을 선택해주세요');
      return;
    }

    if (count === 0) {
      alert('수량을 선택해주세요');
      return;
    }
    try {
      const payload = {
        optionContent: option,
        address: userInfo.address,
        price: product.price,
        ea: +count,
      };
      console.log(payload);

      await purchaseNowAPI({ productId: product.productId, payload });
      alert('구매 완료');
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    const getDeatail = async () => {
      const res = await fetchProductDetailAPI(productId);
      setProduct(res.data);
      setVisibleImg(0);
    };
    getDeatail();
  }, [productId]);
  return (
    <>
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
          <PurchaseFormWrapper>
            <p>옵션</p>
            <ul className="option-list">
              {product.optionList &&
                product?.optionList.map((optionItem, i) => (
                  <li>
                    <button
                      key={i * 10}
                      value={optionItem}
                      className={
                        optionItem === option
                          ? 'option-active option-item'
                          : 'option-item'
                      }
                      onClick={handleChangeOption}
                    >
                      {optionItem}
                    </button>
                  </li>
                ))}
            </ul>
            <CountWrapper>
              <div>주문 수량</div>
              <div className="count-change-wrapper">
                <button
                  className="count-change-btn"
                  onClick={handleDecreaseCount}
                >
                  -
                </button>
                <p value={count} className="count-value">
                  {count}
                </p>
                <button
                  className="count-change-btn"
                  onClick={handleIncreaseCount}
                >
                  +
                </button>
              </div>
            </CountWrapper>
          </PurchaseFormWrapper>
          <ButtonWrapper>
            <button onClick={handleBuyNow}>즉시 구매하기</button>
            <button onClick={handleCreateCartItem}>장바구니 담기</button>
          </ButtonWrapper>
        </ProductInfoWrapper>
      </ProductDetailWrapper>
      <ReviewList reviews={product.reviewList} />
    </>
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
  margin-right: 3rem;
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
  height: 50rem;
  object-fit: cover;
`;

const PurchaseFormWrapper = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .option-list {
    display: flex;
    gap: 2rem;
  }
  .option-item {
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1rem;
    cursor: pointer;
  }
  .option-active {
    background-color: #cecece;
    font-weight: bold;
    border-radius: 1rem;
  }
`;

const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  .count-change-wrapper {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .count-value {
    width: 2rem;
    text-align: center;
    font-weight: bold;
  }
  .count-change-btn {
    padding: 0.5rem;
    font-size: 2rem;
    border: 1px solid #cecece;
    cursor: pointer;
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
