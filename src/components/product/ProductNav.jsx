import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useSearchQuery from 'hooks/useSearchQuery';
import { useDispatch } from 'react-redux';
import { initializeProductList } from 'redux/modules/product';

const ProductNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = useSearchQuery('category');
  const search = useSearchQuery('search');

  const handleProductCategoryRoute = (route) => {
    dispatch(initializeProductList());
    navigate(route);
  };

  return (
    <>
      <ProductNavWrapper>
        <h2 className="nav-title">카테고리</h2>
        <ul className="nav-list">
          <li>
            <StyledLink
              onClick={() => {
                handleProductCategoryRoute('/');
              }}
              $current={!category}
              className="info-link"
            >
              전체
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => {
                handleProductCategoryRoute(
                  `/product?category=상의${search ? `&search=${search}` : ''}`,
                );
              }}
              $current={category === '상의'}
              className="info-link"
            >
              상의
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => {
                handleProductCategoryRoute(
                  `/product?category=하의${search ? `&search=${search}` : ''}`,
                );
              }}
              $current={category === '하의'}
              className="purchase-link"
            >
              하의
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => {
                handleProductCategoryRoute(
                  `/product?category=신발${search ? `&search=${search}` : ''}`,
                );
              }}
              $current={category === '신발'}
              className="purchase-link"
            >
              신발
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => {
                handleProductCategoryRoute(
                  `/product?category=악세서리${
                    search ? `&search=${search}` : ''
                  }`,
                );
              }}
              $current={category === '악세서리'}
              className="purchase-link"
            >
              악세사리
            </StyledLink>
          </li>
        </ul>
      </ProductNavWrapper>
    </>
  );
};

const ProductNavWrapper = styled.nav`
  width: 20%;
  background-color: #fff;
  padding: 6rem 0;
  margin-right: 2rem;
  .nav-title {
    width: max-content;
    font-size: 2.2rem;
    font-weight: bold;
  }
  .nav-list {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;

const StyledLink = styled.button`
  width: max-content;
  display: block;
  font-size: 1.8rem;
  font-weight: ${(props) => (props.$current ? 'bold' : 'normal')};
`;

export default ProductNav;
