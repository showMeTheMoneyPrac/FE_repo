import client from 'api/index';

export const fetchPurchaseList = () => {
  return client.get('/orders', {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
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
