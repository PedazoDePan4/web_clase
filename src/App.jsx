import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AdminPage from './components/AdminPage';

function App() {
  const [login , setLogin] = useState(false);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setLogin={setLogin} />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path="/admin" element={login ? <AdminPage setLogin={setLogin} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
