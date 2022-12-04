import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../common/Button/Button';
import DiaryItem from './DiaryItem';
import DiarySelectBox from './DiarySelectBox';
import { filteredDiaryListState } from '../../store/recoilFilteredDiaryList';

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

function DiaryList() {
  const navigate = useNavigate();
  const filteredDiaryList = useRecoilValue(filteredDiaryListState);

  const goNewDiary = () => {
    navigate(`/new`);
  };

  return (
    <>
      <OptionWrapper>
        <DiarySelectBox optionList={sortOptionList} isSort />
        <DiarySelectBox optionList={filterOptionList} />
        <Button text="새일기 쓰기" type="positive" onClick={goNewDiary} />
      </OptionWrapper>

      <ul>
        {filteredDiaryList.map(item => (
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
