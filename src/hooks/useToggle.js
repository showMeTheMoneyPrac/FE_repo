import { useCallback, useState } from 'react';

const useToggle = () => {
  const [infoToggleState, setInfoToggleState] = useState({
    nickname: false,
    cash: false,
    address: false,
    withdrawal: false,
  });

  const handleToggleState = useCallback((e) => {
    setInfoToggleState((prev) => ({
      ...prev,
      [e.target.name]: !prev[e.target.name],
    }));
  }, []);

  return { infoToggleState, handleToggleState };
};

export default useToggle;
