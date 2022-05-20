import { fireEvent, render, screen } from '@testing-library/react';

import Header from 'components/common/Header';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';

describe('<Header/>', () => {
  const setup = () => {
    return render(<Header />, { wrapper: MemoryRouter });
  };

  test('헤더 렌더링 테스트', () => {
    setup();

    expect(screen.getByRole('link', { name: 'C#' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '로그인' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: '마이페이지' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '장바구니' })).toBeInTheDocument();
  });

  test('헤더 라우팅 테스트', () => {
    setup();
    const history = createMemoryHistory();

    const mainLink = screen.getByRole('link', { name: 'C#' });
    fireEvent.click(mainLink);
    history.push('/');
    expect(history.location.pathname).toBe('/');

    const userLink = screen.getByRole('link', { name: '마이페이지' });
    fireEvent.click(userLink);
    history.push('/user');
    expect(history.location.pathname).toBe('/user');

    const bucketLink = screen.getByRole('link', { name: '장바구니' });
    fireEvent.click(bucketLink);
    history.push('/bucket');
    expect(history.location.pathname).toBe('/bucket');
  });
});
