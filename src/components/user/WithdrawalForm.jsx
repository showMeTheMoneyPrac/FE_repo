import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import StyledCheckbox from 'components/user/StyledCheckbox';
import useSelect from 'hooks/useSelect';
import { deleteAccount } from 'api/user';

const WithdrawalForm = ({ handleToggleState }) => {
  const [error, setError] = useState('');
  const { isSelected, handleSelector } = useSelect();
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    try {
      if (!isSelected) {
        setError('회원 탈퇴에 동의해주세요');
        return;
      }

      await deleteAccount();
      localStorage.clear();
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <WithdrawalTab>
        <label htmlFor="agreeCheckbox">
          <input
            onChange={handleSelector}
            className="a11y-hidden"
            id="agreeCheckbox"
            type="checkbox"
          />
          <div className="agree-wrapper">
            <StyledCheckbox isSelected={isSelected} />
            <p className="agree-comment">회원 탈퇴에 동의합니다.</p>
          </div>
        </label>
      </WithdrawalTab>
      <ActionButtonWrapper>
        <button onClick={handleDeleteAccount} className="agree-btn">
          탈퇴 하기
        </button>
        <button
          onClick={handleToggleState}
          name="withdrawal"
          className="close-btn"
        >
          취소 하기
        </button>
      </ActionButtonWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

const WithdrawalTab = styled.div`
  margin-top: 2rem;
  .agree-wrapper {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .agree-comment {
    font-size: 1.4rem;
  }
`;

const ActionButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  .agree-btn,
  .close-btn {
    font-size: 1.4rem;
    background-color: #222;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 0.8rem;
  }
  .agree-btn {
    background-color: #cecece;
  }
`;

const ErrorMessage = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: red;
`;

export default WithdrawalForm;
