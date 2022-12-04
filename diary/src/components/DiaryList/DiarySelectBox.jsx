import React from 'react';
import { useRecoilState } from 'recoil';
import shortid from 'shortid';
import styled from 'styled-components';
import {
  filterTypeState,
  sortTypeState,
} from '../../store/recoilFilteredDiaryList';

const StyledSelect = styled.select`
  background-color: #ececec;
  border: none;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

function DiarySelectBox({ optionList, isSort }) {
  const [sortType, setSortType] = useRecoilState(sortTypeState);
  const [filterType, setFilterType] = useRecoilState(filterTypeState);
  const handleOptionChange = e => {
    if (isSort) {
      setSortType(e.target.value);
    } else {
      setFilterType(e.target.value);
    }
  };

  return (
    <StyledSelect
      value={isSort ? sortType : filterType}
      onChange={handleOptionChange}
    >
      {optionList.map(item => (
        <option key={shortid.generate()} value={item.value}>
          {item.name}
        </option>
      ))}
    </StyledSelect>
  );
}

export default React.memo(DiarySelectBox);
