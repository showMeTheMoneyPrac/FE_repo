import client from 'api/index';

export const fetchUserInfo = () => {
  return client.get('/members/info', {
    headers: {
      nickname: 'test',
    },
  });
};

export const registUser = (payload) => {
  return client.post('/members/regist', payload);
};


export const updateUserInfo = (payload, target) => {
  return client.patch(`/members/${target}`, payload, {
    headers: {
      nickname: 'test',
    },
  });

export const loginUser = (payload) => {
  console.log(payload);
  return client.post('/members/login', payload);
};
