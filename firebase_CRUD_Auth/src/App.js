import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './common/Header/Header';
import Navigation from './common/Navigation/Navigation';
import { useAuthContext } from './hooks/useAuthContext';
import Chat from './pages/Chat/Chat';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Post from './pages/Post/Post';
import Profile from './pages/Profile/Profile';
import Signup from './pages/Signup/Signup';

function App() {
  const { isAuthReady } = useAuthContext();
  console.log(isAuthReady);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
