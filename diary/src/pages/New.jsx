import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header/Header';
import DiaryEditor from '../components/DiaryEditor/DiaryEditor';

function New() {
  const navigate = useNavigate();

  const goPrevious = () => {
    navigate(-1);
  };

  useEffect(() => {
    const titleEl = document.querySelector('title');
    titleEl.innerHTML = `감정 일기장 - 작성`;
  }, []);

  return (
    <>
      <Header
        headText="일기 쓰기"
        leftBtnText="뒤로가기"
        leftBtnClick={goPrevious}
      />
      <DiaryEditor />
    </>
  );
}

export default New;
