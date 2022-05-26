import { useState } from 'react';

const useSelect = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelector = (e) => {
    setIsSelected(e.target.checked);
  };

  return { isSelected, handleSelector };
};

export default useSelect;
