import { use, useState } from 'react'
import './App.css'
import Login from './components/Login';
import AdminPage from './components/AdminPage';

function App() {
  const [login , setLogin] = useState(false);


  return (
    login ? <AdminPage setLogin={setLogin}/> : <Login setLogin={setLogin}/>
  )
}

export default App
