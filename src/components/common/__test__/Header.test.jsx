import { render, screen } from '@testing-library/react';

import Header from 'components/common/Header';
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
});
