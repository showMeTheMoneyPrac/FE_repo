import client from 'api/index';

export const fetchBucketListAPI = () => {
  return client.get('/carts', {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};

export const deleteBucketItemAPI = (cartId) => {
  return client.delete(`/carts/${cartId}`, {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};

export const buyBucketListAPI = (payload) => {
  return client.post(`/orders`, {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};
