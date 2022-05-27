import client from 'api/index';

export const updateReview = (reviewId, payload) => {
  return client.put(`/reviews/${reviewId}`, payload, {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};
