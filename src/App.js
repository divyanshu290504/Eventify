import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Modal from 'react-modal';

// Modal.setAppElement('#root')

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Calender from './pages/Calender';
import Events from './pages/Events';
import MyEvents from './pages/MyEvents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/MyEvents" element={<MyEvents/>}/>
        <Route path="/calender" element={<Calender />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;