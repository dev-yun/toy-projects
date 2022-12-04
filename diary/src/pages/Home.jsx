import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Header from '../common/Header/Header';
import DiaryList from '../components/DiaryList/DiaryList';
import diaryListState from '../store/recoilDiaryListState';
import { dateFilteredDiaryListState } from '../store/recoilFilteredDiaryList';

function Home() {
  const diaryList = useRecoilValue(diaryListState);
  const setDateFilteredDiaryList = useSetRecoilState(
    dateFilteredDiaryListState,
  );

  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    const titleEl = document.querySelector('title');
    titleEl.innerHTML = `감정 일기장`;
  }, []);

  useEffect(() => {
    if (diaryList.length < 0) {
      return;
    }

    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1,
    ).getTime();

    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      0,
      23,
      59,
      59,
    ).getTime();

    setDateFilteredDiaryList(
      diaryList.filter(item => firstDay <= item.date && item.date <= lastDay),
    );
  }, [curDate, diaryList]);

  const increaseMonth = () => {
    setCurDate(
      new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        curDate.getDate(),
      ),
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(
        curDate.getFullYear(),
        curDate.getMonth() - 1,
        curDate.getDate(),
      ),
    );
  };

  return (
    <>
      <Header
        headText={headText}
        leftBtnText="<"
        rightBtnText=">"
        leftBtnClick={decreaseMonth}
        rightBtnClick={increaseMonth}
      />
      <main>
        <DiaryList />
      </main>
    </>
  );
}

export default Home;
