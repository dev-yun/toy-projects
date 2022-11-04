import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoxOffice from './pages/BoxOffice';
import ShowingMovie from './pages/ShowingMovie';
import ReleasedMovie from './pages/ReleasedMovie';
import Footer from './common/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowingMovie />} />
        <Route path="/released" element={<ReleasedMovie />} />
        <Route path="/box-office" element={<BoxOffice />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
