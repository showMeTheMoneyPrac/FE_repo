import client from 'api/index';

export const fetchProductListAPI = (payload) => {
  return client.get(`/products/search`, {
    params: {
      sort: `${payload.sort ? payload.sort : ''}`,
      category: `${payload.category ? payload.category : ''}`,
      searchKeyword: `${payload.searchKeyword ? payload.searchKeyword : ''}`,
      page: 0,
    },
  });
};
