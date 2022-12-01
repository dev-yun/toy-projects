import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../common/Button/Button';
import DiaryItem from './DiaryItem';
import DiarySelectBox from './DiarySelectBox';

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;

  select {
    width: 20%;
  }
  button {
    width: 57%;
    padding: 11px 20px;
  }
`;

const sortOptionList = [
  { value: 'latest', name: '최신순' },
  { value: 'oldest', name: '과거순' },
];

const filterOptionList = [
  { value: 'all', name: '모든 감정' },
  { value: 'good', name: '좋은 감정' },
  { value: 'bad', name: '나쁜 감정' },
];

function DiaryList({ diaryList }) {
  const [sortType, setSortType] = useState('latest');
  const [filterType, setFilterType] = useState('');
  const navigate = useNavigate();

  const getSortedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === 'latest') {
        return +b.date - +a.date;
      }

      return +a.date - +b.date;
    };

    const copyList = [...diaryList];
    copyList.sort(compare);

    switch (filterType) {
      case 'all': {
        return copyList;
      }
      case 'good': {
        return copyList.filter(item => +item.emotion <= 3);
      }
      case 'bad': {
        return copyList.filter(item => +item.emotion > 3);
      }
      default: {
        return copyList;
      }
    }
  };

  const goNewDiary = () => {
    navigate(`/new`);
  };

  return (
    <>
      <OptionWrapper>
        <DiarySelectBox
          value={sortType}
          handleOption={setSortType}
          optionList={sortOptionList}
        />
        <DiarySelectBox
          value={filterType}
          handleOption={setFilterType}
          optionList={filterOptionList}
        />
        <Button text="새일기 쓰기" type="positive" onClick={goNewDiary} />
      </OptionWrapper>

      <ul>
        {getSortedDiaryList().map(item => (
          <DiaryItem
            key={item.id}
            id={item.id}
            content={item.content}
            emotion={item.emotion}
            date={item.date}
          />
        ))}
      </ul>
    </>
  );
}

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
