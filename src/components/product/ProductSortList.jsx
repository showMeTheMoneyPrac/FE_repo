import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useSearchQuery from 'hooks/useSearchQuery';
import { useDispatch } from 'react-redux';
import { initializeProductList } from 'redux/modules/product';

const ProductSortModal = ({ visible }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = useSearchQuery('category');
  const search = useSearchQuery('search');

  const handleInitilizePage = (route) => {
    dispatch(initializeProductList());
    navigate(route);
  };

  return (
    <ProductSortList visible={visible}>
      <ProductSortItem>
        <SortBtn
          onClick={() =>
            handleInitilizePage(
              `/product?${category ? `category=${category}&` : ''}${
                search ? `search=${search}&` : ''
              }sort=recent`,
            )
          }
          className="sort-link"
        >
          <p className="sort-item">최신순</p>
          <p className="sort-description">상품을 최신순으로 정렬</p>
        </SortBtn>
      </ProductSortItem>
      <ProductSortItem>
        <SortBtn
          onClick={() =>
            handleInitilizePage(
              `/product?${category ? `category=${category}&` : ''}${
                search ? `search=${search}&` : ''
              }sort=cost`,
            )
          }
          className="sort-link"
        >
          <p className="sort-item">가격순</p>
          <p className="sort-description">상품 가격 높은순으로 정렬</p>
        </SortBtn>
      </ProductSortItem>
      <ProductSortItem>
        <SortBtn
          onClick={() =>
            handleInitilizePage(
              `/product?${category ? `category=${category}&` : ''}${
                search ? `search=${search}&` : ''
              }sort=review`,
            )
          }
          className="sort-link"
        >
          <p className="sort-item">리뷰순</p>
          <p className="sort-description">상품의 리뷰가 많은순으로 정렬</p>
        </SortBtn>
      </ProductSortItem>
    </ProductSortList>
  );
};

const ProductSortList = styled.ul`
  position: absolute;
  bottom: -12rem;
  right: 0;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  background-color: #fff;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
  z-index: 400;
`;

const ProductSortItem = styled.li`
  padding: 1rem;
  /* .sort-link {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .sort-item {
      font-size: 1.4rem;
      font-weight: 500;
    }

    .sort-description {
      color: #8e8e8e;
      font-size: 1.2rem;
    }
  } */
  &:hover {
    background-color: #f1f1f1;
  }
`;

const SortBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* cursor: pointer; */
  .sort-item {
    font-size: 1.4rem;
    font-weight: 500;
  }

  .sort-description {
    color: #8e8e8e;
    font-size: 1.2rem;
  }
`;

export default ProductSortModal;
