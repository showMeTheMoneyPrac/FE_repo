import { useState } from 'react';

const useInput = (initialState = null) => {
  const [changeInfo, setChangeInfo] = useState(initialState);

  const handleChangeInfo = (e) => {
    setChangeInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return { changeInfo, setChangeInfo, handleChangeInfo };
};

export default useInput;
