import client from 'api/index';

export const fetchPurchaseListAPI = () => {
  return client.get('/orders', {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};

export const refundPurchaseAPI = (orderDetailId) => {
  return client.delete(`/orders/${orderDetailId}`, {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};

export const createReviewAPI = (orderDetailId, payload) => {
  return client.post(`/reviews/${orderDetailId}`, payload, {
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

export const deleteReviewAPI = (reviewId) => {
  return client.delete(`/reviews/${reviewId}`, {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};

export const purchaseNowAPI = ({ productId, payload }) => {
  return client.post(`/orders/${productId}`, payload, {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};
