import client from 'api';

export const createCartItemAPI = ({ productId, payload }) => {
  return client.post(`/carts/${productId}`, payload, {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};
