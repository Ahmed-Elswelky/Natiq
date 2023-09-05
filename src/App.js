import { Nav } from 'react-bootstrap';
import './App.css';
import About from './components/about.jsx';
import Home from './components/home';
import Natiq from './components/natiq';
import MyNav from './components/nav';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <MyNav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/natiq" element={<Natiq/>} />
    </Routes>
    </div>
  );
}

export default App;
