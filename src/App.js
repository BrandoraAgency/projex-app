
import './App.css';
import Login from './Components/Login/Login';
import Resetpass from './Components/Resetpass/Resetpass';
import Signup from './Components/Signup/Signup';
import {Route,Routes } from 'react-router-dom';
import Workspace from './Components/Workspace/Workspace';
import EmailList from './Components/Resetpass/Resetpass';
import CreateWorkspace from './Components/CreateWorkspace/CreateWorkspace';

function App() {
  return (
    <>
    <Routes>
<Route path='/signup' element={<Signup/>}/>
<Route path='/' element={<Login/>}/>
<Route path='/workspace' element={<Workspace/>}/>
<Route path='/createspace' element={<CreateWorkspace/>}/>
<Route path='/resetpasward' element={<Resetpass/>}/>
{/* <Route path='/' element={<EmailList/>}/> */}
    </Routes>
    </>
  );
}

export default App;
