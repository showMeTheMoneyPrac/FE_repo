import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import SideBar from '../SideBar';

describe('<SideBar />', () => {
  const setup = () => {
    return render(<SideBar />, { wrapper: BrowserRouter });
  };

  test('컴포넌트를 정확히 렌더링하는지 확인', () => {
    setup();

    expect(screen.getByRole('link', { name: '내 정보' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '구매 목록' })).toBeInTheDocument();
  });

  test('내 정보 라우팅 확인', () => {
    setup();

    const infoLink = screen.getByRole('link', { name: '내 정보' });
    fireEvent.click(infoLink);

    const history = createBrowserHistory();
    expect(history.location.pathname).toBe('/user/info');
  });

  test('구매 목록 라우팅 확인', () => {
    setup();

    const purchaseLink = screen.getByRole('link', { name: '구매 목록' });
    fireEvent.click(purchaseLink);

    const history = createBrowserHistory();
    expect(history.location.pathname).toBe('/user/purchase');
  });
});
