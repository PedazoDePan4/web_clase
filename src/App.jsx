import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AdminPage from './components/AdminPage';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';


function App() {
  const [login, setLogin] = useState(true);

  return (
    <Router>
      {login && <Navbar />}
      <Routes>
        <Route path="/" element={<Login setLogin={setLogin} />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path='/home' element={login ? <HomePage setLogin={setLogin} /> : <Navigate to="/login" />} />
        <Route path="/admin" element={login ? <AdminPage setLogin={setLogin} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
