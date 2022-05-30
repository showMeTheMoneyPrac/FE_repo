import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';
import useSearchQuery from 'hooks/useSearchQuery';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from 'redux/modules/product';

const ProductList = () => {
  const dispatch = useDispatch();
  const sort = useSearchQuery('sort');
  const searchKeyword = useSearchQuery('search');
  const category = useSearchQuery('category');
  const target = useRef();
  const [page, setPage] = useState(0);
  const isLoading = useSelector(({ user }) => user.isLoading);
  const products = useSelector(({ product }) => product.productList);

  useEffect(() => {
    const payload = {
      sort,
      searchKeyword,
      category,
      page,
    };
    dispatch(fetchProductList(payload));
  }, [dispatch, sort, searchKeyword, category, page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleInsectionCallback = (entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    };

    const observer = new IntersectionObserver(handleInsectionCallback, options);

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target]);
  return (
    <>
      <ProductListWrapper>
        {products.map((product, i) => {
          return (
            <>
              <ProductItem key={product.productId} product={product} />
            </>
          );
        })}
      </ProductListWrapper>
      {isLoading && <LoadingWrapper>로딩중</LoadingWrapper>}
      <div ref={target}>{page}</div>
    </>
  );
};

const ProductListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8rem;
  gap: 2rem;
`;
const LoadingWrapper = styled.div`
  padding: 2rem 0;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ProductList;
