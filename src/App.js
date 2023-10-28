
import './App.css';
import Login from './Components/Login/Login';
import Resetpass from './Components/Resetpass/Resetpass';
import Signup from './Components/Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import Workspace from './Components/Workspace/Workspace';
import EmailList from './Components/Resetpass/Resetpass';
import CreateWorkspace from './Components/CreateWorkspace/CreateWorkspace';
import Dashboard from './Components/Dashboard/Dashboard';
import File from './Components/Filesmembers/File';
import Members from './Components/Filesmembers/Members';
import Newpassword from './Components/NewPassword/Newpassword';

function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path='/workspace' element={<Workspace />} />
        <Route path='/createspace' element={<CreateWorkspace />} />
        <Route path='/resetpasward' element={<Resetpass />} />
        <Route path='/Newpassword' element={<Newpassword />} />

        <Route path='/dashboard' element={<Dashboard />}>
          <Route path="members" element={<Members />} />
          <Route path="file" element={<File />} />

        </Route>
        {/* <Route path='/' element={<EmailList/>}/> */}
        {/* <Route path="/file" element={<File/>} /> */}

      </Routes>
    </>
  );
}

export default App;
