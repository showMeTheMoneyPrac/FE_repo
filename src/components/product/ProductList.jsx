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
  return (
    <>
      <ProductListWrapper>
        {products.map((product, i) => {
          console.log(product.productId);
          return (
            <>
              <ProductItem key={i} product={product} />
            </>
          );
        })}
      </ProductListWrapper>
    </>
  );
};

const ProductListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export default ProductList;
