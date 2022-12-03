import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import shortid from 'shortid';
import Button from '../../common/Button/Button';
import diaryListState from '../../store/recoilDiaryListState';
import Calendar from './Calendar';
import DiaryContent from './DiaryContent';
import Emotion from './Emotion';

const StyledMain = styled.main`
  section {
    margin: 30px 0px;
  }

  h3 {
    margin: 20px 5px;

    font-size: 1.1rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px;
`;

function DiaryEditor({ isEdit, originData }) {
  const navigate = useNavigate();
  const contentRef = useRef();
  const [diaryList, setDiaryList] = useRecoilState(diaryListState);
  const [newDiary, setNewDiary] = useState({
    id: shortid.generate(),
    date: new Date().getTime(),
    emotion: 3,
    content: '',
  });

  const onCreate = newItem => {
    const newDiaryList = [newItem, ...diaryList];
    setDiaryList(newDiaryList);
    localStorage.setItem('diary', JSON.stringify(newDiaryList));
  };

  const onEdit = newItem => {
    const newDiaryList = diaryList.map(item =>
      item.id === newItem.id ? newItem : item,
    );
    setDiaryList(newDiaryList);
    localStorage.setItem('diary', JSON.stringify(newDiaryList));
  };

  const handleDate = date => {
    setNewDiary({
      ...newDiary,
      date,
    });
  };
  const handleEmotion = emotion => {
    setNewDiary({
      ...newDiary,
      emotion,
    });
  };
  const handleContent = content => {
    setNewDiary({
      ...newDiary,
      content,
    });
  };

  const goPrevious = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    if (newDiary.content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        !isEdit
          ? '새로운 일기를 작성하시겠습니까?'
          : '일기를 수정하시겠습니까?',
      )
    ) {
      if (!isEdit) {
        onCreate(newDiary);
        navigate('/', { replace: true });
      } else {
        onEdit({ id: originData.id, ...newDiary });
        navigate('/');
      }
    }
  };

  // Edit 부분
  useEffect(() => {
    if (isEdit) {
      setNewDiary({
        date: originData.date,
        emotion: originData.emotion,
        content: originData.content,
      });
    }
  }, [isEdit, originData]);

  return (
    <StyledMain>
      <Calendar handleDate={handleDate} date={newDiary.date} />
      <Emotion handleEmotion={handleEmotion} emotionId={newDiary.emotion} />
      <DiaryContent
        handleContent={handleContent}
        contentRef={contentRef}
        content={newDiary.content}
      />
      <Wrapper>
        <Button text="취소하기" onClick={goPrevious} />
        <Button
          text={!isEdit ? '저장하기' : '수정하기'}
          onClick={handleSubmit}
          type="positive"
        />
      </Wrapper>
    </StyledMain>
  );
}

export default DiaryEditor;
