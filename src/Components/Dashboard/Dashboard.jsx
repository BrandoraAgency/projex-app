import React, { useState } from 'react'

import Navbar from './Navbar';
import Sidebar from './Sidebar';
// import Card from './Card';
import Sidee from './Sidee';
import Overdue from './Overdue';
import Compleate from './Compleate';
import Inprogress from './Inprogress';
import Waiting from './Waiting';
import Task from '../Taskpop/Task';
export default function Dashboard() {

  const [task ,Settask] = useState(false);

  const showtask = ()=>{
    Settask(!task);
  }
 
  return (
    <>

      <Navbar showtask={showtask}/>
      <div className='na'>
        <div className='slider'>
          <Sidebar /></div>

        <div className='maicard'>
          <div className='cards'>
            <Inprogress />
            <Waiting />
            <Compleate />
            <Overdue />

          </div>

        </div>
        <div className='side2'><Sidee /></div>
        {task && (
  <Task/>
)}
      </div>
    </>
  )
}
