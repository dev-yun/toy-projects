import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DiaryDispatchContext } from '../../App';
import Button from '../../common/Button/Button';
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

const getStringDate = date => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

function DiaryEditor({ isEdit, originData }) {
  const navigate = useNavigate();
  const contentRef = useRef();
  const [newDiary, setNewDiary] = useState({
    date: getStringDate(new Date()),
    emotion: 3,
    content: '',
  });
  const { onCreate, onEdit } = useContext(DiaryDispatchContext);

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
        onEdit({ targetId: originData.id, ...newDiary });
        navigate('/');
      }
    }
  };

  // Edit 부분
  useEffect(() => {
    if (isEdit) {
      setNewDiary({
        date: getStringDate(new Date(originData.date)),
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
