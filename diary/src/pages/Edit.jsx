import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import Header from '../common/Header/Header';
import DiaryEditor from '../components/DiaryEditor/DiaryEditor';

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [originData, setOriginData] = useState();

  const diaryList = useContext(DiaryStateContext);

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

  console.log(originData);

  return (
    <>
      <Header
        headText="일기 수정하기"
        leftBtnText="뒤로가기"
        leftBtnClick={goPrevious}
      />
      {originData && <DiaryEditor isEdit originData={originData} />}
    </>
  );
}

export default Edit;
