import React, { useMemo, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import shortid from 'shortid';
import styled from 'styled-components';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';

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

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'EDIT': {
      newState = state.map(item =>
        item.id === action.data.id ? { ...action.data } : item,
      );
      break;
    }
    case 'REMOVE': {
      newState = state.filter(item => item.id !== action.targetId);
      break;
    }
    default:
      return state;
  }

  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 3,
    content: '더미 1',
    date: 1669681351306,
  },
  {
    id: 2,
    emotion: 1,
    content: '더미 2',
    date: 1669681551306,
  },
  {
    id: 3,
    emotion: 5,
    content:
      '더미 3asd더미 3as더미 3as더미 3as더미 3as더미 3as더미 3as더미 3as더미 3as더미 3as더미 3as더미 3as더미 3as더미 3as더미 3as',
    date: 1669681301306,
  },
  {
    id: 4,
    emotion: 4,
    content: '더미 4',
    date: 1669681251306,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  const onCreate = ({ date, content, emotion }) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: shortid.generate(),
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  const onRemove = targetId => {
    dispatch({
      type: 'REMOVE',
      targetId,
    });
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  const diaryDispatch = useMemo(
    () => ({
      onCreate,
      onEdit,
      onRemove,
    }),
    [data],
  );

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={diaryDispatch}>
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
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
