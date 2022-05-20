import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  return (
    <SearchForm>
      <InputWrapper>
        <label className="a11y-hidden" for="search">
          search
        </label>
        <input type="text" id="search" placeholder="상품명을 입력하세요." />
      </InputWrapper>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  padding: 3rem 0;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  input {
    width: 30%;
    height: 3rem;
    font-size: 1.6rem;
    box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
    border-radius: 1rem;
    ::placeholder {
      padding: 2rem;
    }
  }
`;

export default SearchBar;
