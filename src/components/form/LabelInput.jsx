import React from 'react';
import styled from 'styled-components';

const LabelInput = ({
  inputId,
  inputType,
  InputPlaceholder,
  labelText,
  readOnly,
}) => {
  return (
    <LabelInputWrapper>
      <label className="input-label" htmlFor={inputId}>
        {labelText}
      </label>
      <input
        className="input-wrapper"
        type={inputType}
        id={inputId}
        placeholder={InputPlaceholder}
        readOnly={readOnly}
      />
    </LabelInputWrapper>
  );
};

const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  .input-label {
    font-size: 1.6rem;
  }
  .input-wrapper {
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
    border-radius: 1rem;
  }
`;

export default LabelInput;
