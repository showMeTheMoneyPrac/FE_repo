import { useLocation } from 'react-router-dom';

const useSearchQuery = (queryKey) => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const queryValue = query.get(queryKey);

  return queryValue;
};

export default useSearchQuery;
