import client from 'api/index';

export const fetchPurchaseListAPI = () => {
  return client.get('/orders', {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};

export const updateReviewAPI = (reviewId, payload) => {
  return client.put(`/reviews/${reviewId}`, payload, {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};
