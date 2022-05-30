import client from 'api/index';

export const fetchUserInfoAPI = () => {
  return client.get('/members/info', {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};

export const registUserAPI = (payload) => {
  return client.post('/members/regist', payload);
};

export const updateUserInfo = (payload, target) => {
  return client.patch(`/members/${target}`, payload, {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};

export const loginUserAPI = (payload) => {
  return client.post('/members/login', payload);
};

export const deleteAccount = () => {
  return client.delete('/members', {
    headers: {
      Authorization: localStorage.getItem('nickname'),
    },
  });
};
