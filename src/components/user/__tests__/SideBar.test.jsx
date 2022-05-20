import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'jest-styled-components';

import SideBar from '../SideBar';

describe('<SideBar />', () => {
  const setup = () => {
    render(<SideBar />, { wrapper: MemoryRouter });
    const infoLink = screen.getByRole('link', { name: '내 정보' });
    const purchaseLink = screen.getByRole('link', { name: '구매 목록' });

    return {
      infoLink,
      purchaseLink,
    };
  };

  test('컴포넌트를 정확히 렌더링하는지 확인', () => {
    const { infoLink, purchaseLink } = setup();

    expect(infoLink).toBeInTheDocument();
    expect(purchaseLink).toBeInTheDocument();
  });

  test('라우팅 확인', () => {
    const { infoLink, purchaseLink } = setup();
    const history = createBrowserHistory();

    fireEvent.click(infoLink);
    history.push('/user/info');
    expect(history.location.pathname).toBe('/user/info');

    fireEvent.click(purchaseLink);
    history.push('/user/purchase');
    expect(history.location.pathname).toBe('/user/purchase');
  });

  test('네비게이션 메뉴 스타일 변경 확인', () => {
    const { infoLink, purchaseLink } = setup();

    expect(infoLink).toHaveStyleRule('font-weight', 'bold');
    expect(purchaseLink).not.toHaveStyleRule('font-weight', 'bold');

    fireEvent.click(purchaseLink);
    expect(infoLink).not.toHaveStyleRule('font-weight', 'bold');
    expect(purchaseLink).toHaveStyleRule('font-weight', 'bold');

    fireEvent.click(infoLink);
    expect(infoLink).toHaveStyleRule('font-weight', 'bold');
    expect(purchaseLink).not.toHaveStyleRule('font-weight', 'bold');
  });
});
