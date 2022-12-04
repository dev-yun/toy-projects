import React, { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import shortid from 'shortid';
import Button from '../../common/Button/Button';
import diaryListState from '../../store/recoilDiaryListState';
import Calendar from './Calendar';
import DiaryContent from './DiaryContent';
import Emotion from './Emotion';
import {
  newContentState,
  newDateState,
  newEmotionState,
} from '../../store/recoilNewDiaryState';

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
  const [date, setDate] = useRecoilState(newDateState);
  const [emotion, setEmotion] = useRecoilState(newEmotionState);
  const [content, setContent] = useRecoilState(newContentState);

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

  const goPrevious = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    const newDiary = {
      id: !isEdit ? shortid.generate() : originData.id,
      date,
      emotion,
      content,
    };

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
        onEdit(newDiary);
        navigate('/');
      }
    }
  };

  useEffect(() => {
    if (isEdit) {
      setDate(originData.date);
      setEmotion(originData.emotion);
      setContent(originData.content);
    } else {
      setDate(new Date().getTime());
      setEmotion(3);
      setContent('');
    }
  }, [isEdit, originData]);

  return (
    <StyledMain>
      <Calendar />
      <Emotion />
      <DiaryContent contentRef={contentRef} />
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
