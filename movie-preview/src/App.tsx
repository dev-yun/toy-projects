import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import BoxOffice from './pages/BoxOffice';
import ShowingMovie from './pages/ShowingMovie';
import ReleasedMovie from './pages/ReleasedMovie';

const Cont = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShowingMovie />} />
          <Route path="/released" element={<ReleasedMovie />} />
          <Route path="/box-office" element={<BoxOffice />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
