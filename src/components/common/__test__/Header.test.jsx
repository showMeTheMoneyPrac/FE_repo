import { render, screen } from '@testing-library/react';

import Header from 'components/common/Header';

describe('<Header/>', () => {
  test('헤더 렌더링 테스트', () => {
    render(<Header />);
    screen.getByText('C#');
    screen.getByText('로그인');
    screen.getByText('마이페이지');
    screen.getByText('장바구니');
    screen.getByPlaceholderText('상품명을 입력하세요.');
  });
});
