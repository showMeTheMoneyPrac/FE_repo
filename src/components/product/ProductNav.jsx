import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useSearchQuery from 'hooks/useSearchQuery';

const ProductNav = () => {
  const category = useSearchQuery('category');
  const search = useSearchQuery('search');

  return (
    <>
      <ProductNavWrapper>
        <h2 className="nav-title">카테고리</h2>
        <ul className="nav-list">
          <li>
            <StyledLink $current={!category} className="info-link" to="/">
              전체
            </StyledLink>
          </li>
          <li>
            <StyledLink
              $current={category === '상의'}
              className="info-link"
              to={`/product?category=상의${search ? `&search=${search}` : ''}`}
            >
              상의
            </StyledLink>
          </li>
          <li>
            <StyledLink
              $current={category === '하의'}
              className="purchase-link"
              to={`/product?category=하의${search ? `&search=${search}` : ''}`}
            >
              하의
            </StyledLink>
          </li>
          <li>
            <StyledLink
              $current={category === '신발'}
              className="purchase-link"
              to={`/product?category=신발${search ? `&search=${search}` : ''}`}
            >
              신발
            </StyledLink>
          </li>
          <li>
            <StyledLink
              $current={category === '악세사리'}
              className="purchase-link"
              to={`/product?category=악세사리${
                search ? `&search=${search}` : ''
              }`}
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

const StyledLink = styled(Link)`
  width: max-content;
  display: block;
  font-size: 1.8rem;
  font-weight: ${(props) => (props.$current ? 'bold' : 'normal')};
`;

export default ProductNav;
