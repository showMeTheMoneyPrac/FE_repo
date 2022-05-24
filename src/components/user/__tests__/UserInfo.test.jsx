import { render, screen } from '@testing-library/react';

import UserInfo from '../UserInfo';

describe('<UserInfo />', () => {
  test('초기에 유저 정보와 수정 버튼을 정확히 렌더링하는지 확인', () => {
    render(<UserInfo />);

    expect(
      screen.getByRole('heading', { level: 4, name: '닉네임' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '닉네임 수정' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { level: 4, name: '잔여 포인트' }),
    ).toBeInTheDocument('잔여 포인트');
    expect(
      screen.getByRole('button', { name: '포인트 충전' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { level: 4, name: '주소' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '주소 수정' }),
    ).toBeInTheDocument();
  });
});
