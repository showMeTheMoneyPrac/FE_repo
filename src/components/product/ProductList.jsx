import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';
import useSearchQuery from 'hooks/useSearchQuery';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList, initializeProductList } from 'redux/modules/product';

const ProductList = () => {
  const dispatch = useDispatch();
  const sort = useSearchQuery('sort');
  const searchKeyword = useSearchQuery('search');
  const category = useSearchQuery('category');
  const target = useRef();
  const { productList: products, page } = useSelector(({ product }) => product);

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
        // dispatch(changePage());
        observer.unobserve(targetEl);
      }
    };

    const observer = new IntersectionObserver(handleInsectionCallback, options);

    if (targetEl) {
      observer.observe(targetEl);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ProductListWrapper>
        {products.map((product, i) => (
          <ProductItem key={i} product={product} />
        ))}
        <TargetWrapper ref={target}>{page}</TargetWrapper>
      </ProductListWrapper>
    </>
  );
};

const ProductListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 90rem;
`;

const TargetWrapper = styled.div`
  position: fixed;
  bottom: 0;
`;
export default ProductList;
