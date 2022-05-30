import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';
import { fetchProductListAPI } from 'api/product';
import useSearchQuery from 'hooks/useSearchQuery';
import { useDispatch } from 'react-redux';
import { fetchProductList } from 'redux/modules/product';

const ProductList = () => {
  const dispatch = useDispatch();
  const sort = useSearchQuery('sort');
  const searchKeyword = useSearchQuery('search');
  const category = useSearchQuery('category');
  const page = 0;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const payload = {
      sort,
      searchKeyword,
      category,
      page,
    };

    const getProductList = async () => {
      const res = await fetchProductListAPI(payload);
      setProducts(res.data);
    };
    dispatch(fetchProductList());

    getProductList();
  }, [sort, searchKeyword, category]);
  return (
    <ProductListWrapper>
      {products.map((product) => (
        <ProductItem key={product.productId} product={product} />
      ))}
    </ProductListWrapper>
  );
};

const ProductListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8rem;
  gap: 2rem;
`;

export default ProductList;
