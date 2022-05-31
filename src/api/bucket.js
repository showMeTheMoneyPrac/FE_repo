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

export const updateBucketCountAPI = (payload) => {
  return client.patch(`/carts`, payload, {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};

export const buyBucketListAPI = (payload) => {
  return client.post(`/orders`, payload, {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};
