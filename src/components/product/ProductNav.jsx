import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ProductNav = () => {
  const { pathname } = useLocation();

  return (
    <ProductNavWrapper>
      <h2 className="nav-title">카테고리</h2>
      <ul className="nav-list">
        <li>
          <StyledLink
            $current={pathname === '/product?category=top'}
            className="info-link"
            to="/product?category=top"
          >
            상의
          </StyledLink>
        </li>
        <li>
          <StyledLink
            $current={pathname === '/product?category=bottom'}
            className="purchase-link"
            to="/product?category=bottom"
          >
            하의
          </StyledLink>
        </li>
        <li>
          <StyledLink
            $current={pathname === '/product?category=shoes'}
            className="purchase-link"
            to="/product?category=shoes"
          >
            신발
          </StyledLink>
        </li>
        <li>
          <StyledLink
            $current={pathname === '/product?category=accessary'}
            className="purchase-link"
            to="/product?category=accessary"
          >
            악세사리
          </StyledLink>
        </li>
      </ul>
    </ProductNavWrapper>
  );
};

const ProductNavWrapper = styled.nav`
  width: 20%;
  background-color: #fff;
  padding: 6rem 3rem;
  .nav-title {
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

const StyledLink = styled(Link)`
  display: block;
  font-size: 1.8rem;
  font-weight: ${(props) => (props.$current ? 'bold' : 'normal')};
`;

export default ProductNav;
