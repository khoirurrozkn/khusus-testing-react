
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';
import Admin from './Admin';
import Galeryyy from './Galeryyy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/galeri' element={<Galeryyy />} />
        <Route path='/pertanyaan' element={<Questions />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
