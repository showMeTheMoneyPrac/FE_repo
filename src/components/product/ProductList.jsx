import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';
import { fetchProductList } from 'api/product';
import useSearchQuery from 'hooks/useSearchQuery';

const ProductList = () => {
  const sort = useSearchQuery('sort');
  const searchKeyword = useSearchQuery('search');
  const category = useSearchQuery('category');
  const page = 1;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const payload = {
      sort,
      searchKeyword,
      category,
      page,
    };

    const getProductList = async () => {
      const res = await fetchProductList(payload);
      setProducts(res.data);
    };

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
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;

export default ProductList;
