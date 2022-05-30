import client from 'api';

export const createCartItemAPI = ({ productId, payload }) => {
  console.log(payload);
  return client.post(`/carts/${productId}`, payload, {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};
