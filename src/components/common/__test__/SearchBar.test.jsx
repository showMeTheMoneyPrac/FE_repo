import { render, screen } from '@testing-library/react';
import SearchBar from 'components/common/SearchBar';

describe('<SearchForm/>', () => {
  test('검색바 렌더링 테스트', () => {
    render(<SearchBar />);
    expect(screen.getByLabelText('search'));
    expect(screen.getByPlaceholderText('상품명을 입력하세요.'));
  });
});
