import client from 'api/index';

export const fetchPurchaseList = () => {
  return client.get('/orders', {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};
