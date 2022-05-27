import client from 'api/index';

export const fetchProductList = (payload) => {
  return client.get(
    `/products/search?sort=${payload.sort ? payload.sort : ''}&category=${
      payload.category ? payload.category : ''
    }&searchKeyword=${
      payload.searchKeyword ? payload.searchKeyword : ''
    }&page=${payload.page}`,
  );
};

export const fetchProductList = (payload) => {
  return client.get(
    `/products/search?sort=${payload.sort ? payload.sort : ''}&category=${
      payload.category ? payload.category : ''
    }&searchKeyword=${
      payload.searchKeyword ? payload.searchKeyword : ''
    }&page=${payload.page}`,
  );
};
