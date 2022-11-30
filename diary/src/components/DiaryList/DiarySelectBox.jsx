import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';

const StyledSelect = styled.select`
  background-color: #ececec;
  border: none;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

function DiarySelectBox({ value, handleOption, optionList }) {
  const handleOptionType = e => {
    handleOption(e.target.value);
  };

  return (
    <StyledSelect value={value} onChange={handleOptionType}>
      {optionList.map(item => (
        <option key={shortid.generate()} value={item.value}>
          {item.name}
        </option>
      ))}
    </StyledSelect>
  );
}

export default DiarySelectBox;
