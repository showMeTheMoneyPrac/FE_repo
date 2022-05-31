import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';
import useSearchQuery from 'hooks/useSearchQuery';
import { useDispatch, useSelector } from 'react-redux';
import {
  changePage,
  fetchProductList,
  initializeProductList,
} from 'redux/modules/product';

const ProductList = () => {
  const dispatch = useDispatch();
  const sort = useSearchQuery('sort');
  const searchKeyword = useSearchQuery('search');
  const category = useSearchQuery('category');
  const target = useRef(null);
  const {
    productList: products,
    page,
    isLoading,
  } = useSelector(({ product }) => product);
  useEffect(() => {
    const payload = {
      sort,
      searchKeyword,
      category,
      page,
    };

    if (page === 0) {
      dispatch(initializeProductList());
    }

    dispatch(fetchProductList(payload));
  }, [dispatch, sort, searchKeyword, category, page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const targetEl = target.current;

    const handleInsectionCallback = (entries) => {
      if (entries[0].isIntersecting) {
        dispatch(changePage());
      }
    };

    const observer = new IntersectionObserver(handleInsectionCallback, options);

    if (targetEl && !isLoading) {
      observer.observe(targetEl);
    }

    return () => observer.disconnect();
  }, [target, isLoading, dispatch]);

  return (
    <>
      <ProductListWrapper>
        {products.map((product, i) =>
          products.length - 1 === i ? (
            <>
              <ProductItem key={i} product={product} />
              <div ref={target}></div>
            </>
          ) : (
            <ProductItem key={i} product={product} />
          ),
        )}
      </ProductListWrapper>
    </>
  );
};

const ProductListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 90rem;
`;

export default ProductList;
