
import './App.css';
import Login from './Components/Login/Login';
import Resetpass from './Components/Resetpass/Resetpass';
import Signup from './Components/Signup/Signup';
import {Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
<Route path='/signup' element={<Signup/>}/>
<Route path='/' element={<Login/>}/>
<Route path='/resetpasward' element={<Resetpass/>}/>
    </Routes>
    </>
  );
}

export default App;
