import client from 'api/index';

export const fetchUserInfo = () => {
  return client.get('/members/info', {
    headers: {
      nickname: 'test',
    },
  });
};
