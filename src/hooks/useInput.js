import { useState } from 'react';

const useInput = (initialState = null) => {
  const [inputValue, setInputValue] = useState(initialState);

  const handleChangeInput = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return { inputValue, setInputValue, handleChangeInput };
};

export default useInput;
