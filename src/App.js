import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from "./views/profile";
import Home from "./views/home";
import './css/profile.css';

function App() {
  return (
    <div className='main'>
      <div className='container app'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
