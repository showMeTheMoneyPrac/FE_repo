import useSearchQuery from 'hooks/useSearchQuery';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProductList, initializeProductList } from 'redux/modules/product';
import styled from 'styled-components';

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const category = useSearchQuery('category');
  const sort = useSearchQuery('sort');
  const page = useSelector(({ product }) => product.page);

  const handleChangeSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleRouteSearchList = (e) => {
    e.preventDefault();
    const payload = {
      sort,
      searchKeyword,
      category,
      page,
    };
    dispatch(initializeProductList());
    dispatch(fetchProductList(payload));
    navigate(
      `/product?${
        category ? `category=${category}&` : ''
      }search=${searchKeyword}`,
    );
  };

  return (
    <SearchForm onSubmit={handleRouteSearchList}>
      <InputWrapper>
        <label className="a11y-hidden" htmlFor="search">
          search
        </label>
        <input
          onChange={handleChangeSearchKeyword}
          type="text"
          id="search"
          placeholder="상품명을 입력하세요."
        />
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
    padding: 1rem;
    height: 3rem;
    font-size: 1.6rem;
    box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
    border-radius: 1rem;
  }
`;

export default SearchBar;
