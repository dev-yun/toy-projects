import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';
import diaryListState from './store/recoilDiaryListState';

const Wrapper = styled.div`
  background-color: white;
  min-height: 100vh;
  padding: 0px 20px;

  box-sizing: border-box;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (min-width: 610px) {
    width: 600px;
  }

  @media (max-width: 610px) {
    width: 90vw;
    min-width: 500px;
  }
`;

function App() {
  const setDiaryList = useSetRecoilState(diaryListState);

  useEffect(() => {
    const localData = localStorage.getItem('diary');
    if (localData) {
      const diaryList = JSON.parse(localData);
      setDiaryList(diaryList);
    }
  }, []);

  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
