import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import SideBar from '../SideBar';

describe('<SideBar />', () => {
  const setup = () => {
    return render(<SideBar />, { wrapper: MemoryRouter });
  };

  test('컴포넌트를 정확히 렌더링하는지 확인', () => {
    setup();

    expect(screen.getByRole('link', { name: '내 정보' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '구매 목록' })).toBeInTheDocument();
  });

  test('라우팅 확인', () => {
    setup();
    const history = createBrowserHistory();

    const infoLink = screen.getByRole('link', { name: '내 정보' });
    fireEvent.click(infoLink);
    history.push('/user/info');
    expect(history.location.pathname).toBe('/user/info');

    const purchaseLink = screen.getByRole('link', { name: '구매 목록' });
    fireEvent.click(purchaseLink);
    history.push('/user/purchase');
    expect(history.location.pathname).toBe('/user/purchase');
  });
});
