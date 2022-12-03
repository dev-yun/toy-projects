import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../common/Header/Header';
import DiaryEditor from '../components/DiaryEditor/DiaryEditor';
import diaryListState from '../store/recoilDiaryListState';

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [originData, setOriginData] = useState();

  const [diaryList, setDiaryList] = useRecoilState(diaryListState);

  const onRemove = targetId => {
    const newDiaryList = diaryList.filter(item => item.id !== targetId);
    setDiaryList(newDiaryList);
    localStorage.setItem('diary', JSON.stringify(newDiaryList));
  };

  useEffect(() => {
    const titleEl = document.querySelector('title');
    titleEl.innerHTML = `감정 일기장 - 수정`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        item => String(item.id) === String(id),
      );

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [id, diaryList]);

  const goPrevious = () => {
    navigate(-1);
  };

  const removeDiary = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onRemove(id);
      navigate('/', { replace: true });
    }
  };

  return (
    <>
      <Header
        headText="일기 수정하기"
        leftBtnText="뒤로가기"
        leftBtnClick={goPrevious}
        rightBtnText="삭제하기"
        rightBtnClick={removeDiary}
        rightBtnType="negative"
      />
      {originData && <DiaryEditor isEdit originData={originData} />}
    </>
  );
}

export default Edit;
