import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../common/Header/Header';
import DiaryDetail from '../components/DiaryDetail/DiaryDetail';
import getStringDate from '../utils/date';
import diaryListState from '../store/recoilDiaryListState';

function Diary() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [originData, setOriginData] = useState();

  const diaryList = useRecoilValue(diaryListState);

  useEffect(() => {
    const titleEl = document.querySelector('title');
    titleEl.innerHTML = `감정 일기장 - 상세보기`;
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

  const goEdit = () => {
    navigate(`/edit/${originData.id}`);
  };

  if (!originData) {
    return <div>로딩중입니다...</div>;
  }

  return (
    <>
      <Header
        headText={`${getStringDate(new Date(originData.date))} 기록`}
        leftBtnText="뒤로가기"
        rightBtnText="수정하기"
        leftBtnClick={goPrevious}
        rightBtnClick={goEdit}
        rightBtnType="positive"
      />
      <DiaryDetail originData={originData} />
    </>
  );
}

export default Diary;
